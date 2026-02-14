import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getContacts, addContact, deleteContact } from "../api/contacts";
import ContactFormModal from "../components/ContactFormModal";
import ConfirmDialog from "../components/ConfirmDialog";
import toast from "react-hot-toast";

export default function ContactsPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const qc = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["contacts", search],
    queryFn: () => getContacts(search)
  });

  const addMutation = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contacts"] });
      toast.success("Contact added");
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contacts"] });
      toast.success("Deleted");
    }
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2"
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => setModal(true)}>Add Contact</button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((c: any) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.company}</td>
              <td>
                <button onClick={() => setDeleteId(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ContactFormModal
        open={modal}
        onClose={() => setModal(false)}
        onSubmit={(d: any) => addMutation.mutate(d)}
      />

      <ConfirmDialog
        open={!!deleteId}
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          deleteMutation.mutate(deleteId!);
          setDeleteId(null);
        }}
      />
    </div>
  );
}
