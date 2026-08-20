// Backend manzili. Production da VITE_API_URL berilmasa API butunlay o'chiriladi -
// sayt statik ma'lumot bilan ishlaydi va bekorga so'rov yubormaydi.
const BASE_URL = import.meta.env.VITE_API_URL
    || (import.meta.env.DEV ? 'http://localhost:3000' : '');

const TOKEN_KEY = 'admin_jwt';
const isBrowser = typeof window !== 'undefined';

// Backend ulanmasa (o'chgan, CORS bloklagan va h.k.) qayta-qayta urinmaymiz:
// birinchi tarmoq xatosidan keyin sessiya davomida so'rov yubormaymiz.
let apiOffline = false;

export const isApiEnabled = () => Boolean(BASE_URL) && isBrowser && !apiOffline;

class ApiDisabledError extends Error {
    constructor() {
        super('API o\'chirilgan yoki mavjud emas.');
        this.name = 'ApiDisabledError';
        this.disabled = true;
    }
}

export const tokenStorage = {
    get:    ()      => (isBrowser ? sessionStorage.getItem(TOKEN_KEY) : null),
    set:    (token) => { if (isBrowser) sessionStorage.setItem(TOKEN_KEY, token); },
    remove: ()      => { if (isBrowser) sessionStorage.removeItem(TOKEN_KEY); },
};

async function request(method, path, body = null) {
    if (!isApiEnabled()) throw new ApiDisabledError();

    const headers = { 'Content-Type': 'application/json' };
    const token = tokenStorage.get();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const config = { method, headers };
    if (body !== null) config.body = JSON.stringify(body);

    let response;
    try {
        response = await fetch(`${BASE_URL}${path}`, config);
    } catch {
        // Tarmoq/CORS xatosi - backend yo'q deb hisoblaymiz
        apiOffline = true;
        throw new ApiDisabledError();
    }

    if (response.status === 204) return null;

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        const err = new Error(data?.error || `Server xatosi: ${response.status}`);
        err.status = response.status;
        throw err;
    }
    return data;
}

export const api = {
    get:    (path)       => request('GET',    path),
    post:   (path, body) => request('POST',   path, body),
    put:    (path, body) => request('PUT',    path, body),
    delete: (path)       => request('DELETE', path),
};

export default api;
