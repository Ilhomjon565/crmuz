import ApplicationForm from "../application-form"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  // Replace these IDs with your actual form IDs from your backend
  // You need to include ALL possible IDs that should be accessible
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    // Add all your form IDs here
  ]
}

export default function FormPage({ params }: { params: { id: string } }) {
  return <ApplicationForm />
}
