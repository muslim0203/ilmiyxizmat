const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const TOKEN_KEY = 'admin_jwt';

export const tokenStorage = {
    get:    ()      => sessionStorage.getItem(TOKEN_KEY),
    set:    (token) => sessionStorage.setItem(TOKEN_KEY, token),
    remove: ()      => sessionStorage.removeItem(TOKEN_KEY),
};

async function request(method, path, body = null) {
    const headers = { 'Content-Type': 'application/json' };
    const token = tokenStorage.get();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const config = { method, headers };
    if (body !== null) config.body = JSON.stringify(body);

    const response = await fetch(`${BASE_URL}${path}`, config);
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
