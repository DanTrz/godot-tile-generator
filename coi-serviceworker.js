/*! coi-serviceworker v0.1.7 | MIT License | https://github.com/gzguidoti/coi-serviceworker */
if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
    self.addEventListener("fetch", (e) => {
        const { request } = e;
        if (request.cache === "only-if-cached" && request.mode !== "same-origin") return;
        e.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.status === 0) return response;
                    const headers = new Headers(response.headers);
                    headers.set("Cross-Origin-Embedder-Policy", "require-corp");
                    headers.set("Cross-Origin-Opener-Policy", "same-origin");
                    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
                })
                .catch((error) => console.error(error))
        );
    });
} else {
    (() => {
        const script = document.currentScript;
        if (window.crossOriginIsolated) return;
        if (window.navigator.serviceWorker) {
            window.navigator.serviceWorker.register(script.src).then((registration) => {
                registration.addEventListener("updatefound", () => {
                    location.reload();
                });
                if (registration.active && !window.navigator.serviceWorker.controller) {
                    location.reload();
                }
            });
        }
    })();
}
