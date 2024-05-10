import { createClient } from "@/libs/clients/supabase/server";


export async function getSignedInUser() {
  // Get the current session
  const { data: { user }, error } = await createClient().auth.getUser();

  if (error) {
    // Handle error
    console.error('Error getting session:', error.message);
    return null;
  }

  if (user) {
    // User is signed in
    return user;
  } else {
    // User is not signed in
    return null;
  }
}