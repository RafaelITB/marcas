import re

def validar_nom(nom):
    """Valida que el nom només contingui lletres i espais."""
    return bool(re.fullmatch(r"[a-zA-ZÀ-ÿ ]+", nom))

def validar_numero(valor):
    """Valida que una cadena sigui un número enter positiu."""
    return bool(re.fullmatch(r"\d+", valor))