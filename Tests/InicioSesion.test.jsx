import { describe, expect, it } from "vitest";

describe("Validar inicio de sesion", () => {
    const nombreLargo = "nombremuylargo"
    const nombreCorto = "nom"
    const correoValido = "knjsdfejnkf@hodasla.com"
    const correoNoValido = "sjknsjnfsd"
    const contrasenaInvalida = "734"
    const contrasenaValida = "734dskfnjsd"

    let expCorreo = /b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}b/

    function validarNombre(nombre) {
        return (nombre.length > 6);
    }

    function validarCorreo(correo) {
        return (expCorreo.test(correo.value));
    }

    function validarContrasena(pass) {
        return (pass.length > 8);
    }

    it ("Ingresar nombre valido", () => {
        expect(validarNombre(nombreLargo)).toBe(true);
    });

    it ("Ingresar nombre no valido", () => {
        expect(validarNombre(nombreCorto)).toBe(false);
    });

    it ("Ingresar correo valido", () => {
        expect(validarCorreo(correoValido)).toBe(true);
    });
    
    it ("Ingresar correo no valido", () => {
        expect(validarCorreo(correoNoValido)).toBe(false);
    });

    it ("Ingresar contraseña valida", () => {
        expect(validarContrasena(contrasenaValida)).toBe(true);
    });

    it ("Ingresar contraseña no valida", () => {
        expect(validarContrasena(contrasenaInvalida)).toBe(false);
    });

});