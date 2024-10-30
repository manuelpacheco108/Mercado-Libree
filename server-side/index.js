
import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import axios from "axios";


const app = express();
const port = 3000;


mercadopago.configurations = {
    access_token: 'TEST-3602407621895185-102718-f2fc783c219770831db498204892f0f1-1443746881',
};

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Funciona");
});

app.post("/create_preference", async (req, res) => {
    try {
        const items = req.body.items;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "No se proporcionaron elementos válidos para el pago" });
        }

        items.forEach(item => {
            if (!item.title || typeof item.title !== 'string') throw new Error("Cada item debe tener un 'title' de tipo string");
            if (!item.quantity || typeof item.quantity !== 'number') throw new Error("Cada item debe tener una 'quantity' de tipo number");
            if (!item.unit_price || typeof item.unit_price !== 'number') throw new Error("Cada item debe tener un 'unit_price' de tipo number");
        });

        const preference = {
            items: items,
            back_urls: {
                success: "myapp://success",
                failure: "https://www.youtube.com/watch?v=ZRWUvty0I9M",
                pending: "https://www.youtube.com/watch?v=ZRWUvty0I9M"
            },
            auto_return: "approved",
        };

        const result = await axios.post("https://api.mercadopago.com/checkout/preferences", preference, {
            headers: {
                Authorization: `Bearer ${mercadopago.configurations.access_token}`
            }
        });

        res.json({
            id: result.data.id,
            init_point: result.data.init_point,
        });
    } catch (error) {
        console.error("Error al crear la preferencia:", error);
        res.status(500).json({ message: "Error al crear la preferencia", error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});