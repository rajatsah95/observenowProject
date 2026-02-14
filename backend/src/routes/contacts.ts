import { Router, Request, Response } from "express";
import { db } from "../db/index.js";
import { savedContacts } from "../db/schema.js";
import { like, or, eq } from "drizzle-orm";
import { contactSchema } from "../validation/contact.js";

const router = Router();

// GET contacts
router.get("/", async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;

    let data;

    if (search && search.trim() !== "") {
      data = await db
        .select()
        .from(savedContacts)
        .where(
          or(
            like(savedContacts.name, `%${search}%`),
            like(savedContacts.company, `%${search}%`)
          )
        );
    } else {
      data = await db.select().from(savedContacts);
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// POST contact
router.post("/", async (req: Request, res: Response) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json(parsed.error);
    }

    const [newContact] = await db
      .insert(savedContacts)
      .values(parsed.data)
      .returning();

    res.json(newContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create contact" });
  }
});

// DELETE contact
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await db
      .delete(savedContacts)
      .where(eq(savedContacts.id, Number(req.params.id)));

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

export default router;
