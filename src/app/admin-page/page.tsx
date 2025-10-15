import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (session?.role !== "ADMIN") {
    redirect("/custom-error");
  }
  return (
    <div>This is the admin page. It should only be accessible for admins.</div>
  );
}
