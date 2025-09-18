import { redirect } from "next/navigation"

import TicketManagementClient from "@/components/ticket-management-client"
import { createClient } from "@/lib/supabase/server"

export default async function TicketManagementPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/")
  }

  return <TicketManagementClient />
}
