import { describe, expect, it } from "vitest";

describe("Agregar producto a carro", () => {
    it ("Simular agregar producto al carrito del cliente", () => {
        let carrito = ["item"];
        carrito.push("nuevo item")
        expect(carrito.length).toBe(2);
    });  
});