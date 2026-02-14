export default function ConfirmDialog({ open, onConfirm, onCancel }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl">
        <p>Are you sure?</p>
        <div className="flex gap-2 mt-4">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
