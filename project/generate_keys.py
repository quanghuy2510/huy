# generate_keys.py
from Crypto.PublicKey import RSA # type: ignore

key = RSA.generate(2048)
with open("keys/private.pem", "wb") as f:
    f.write(key.export_key())

with open("keys/public.pem", "wb") as f:
    f.write(key.publickey().export_key())
