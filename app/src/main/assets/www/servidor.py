#!/usr/bin/env python3
"""Servidor local do Raiden X (Termux ou PC). Uso: python3 servidor.py [porta]"""
import http.server, mimetypes, os, sys

mimetypes.add_type('application/wasm', '.wasm')
mimetypes.add_type('application/manifest+json', '.webmanifest')
mimetypes.add_type('application/x-shockwave-flash', '.swf')
mimetypes.add_type('text/javascript', '.js')

os.chdir(os.path.dirname(os.path.abspath(__file__)))
porta = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()
    def log_message(self, *a):
        pass

print(f'Raiden X rodando. Abra no Chrome: http://localhost:{porta}')
print('Ctrl+C para parar.')
http.server.ThreadingHTTPServer(('127.0.0.1', porta), H).serve_forever()
