import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional()
});

export default function ContactFormModal({ open, onSubmit, onClose }: any) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl space-y-2"
      >
        <input {...register("name")} placeholder="Name" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("phone")} placeholder="Phone" />
        <input {...register("company")} placeholder="Company" />
        <button>Add</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
}
