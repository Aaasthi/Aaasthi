import './globals.css'
export const metadata = {
  title: 'FinServ Consultant',
  description: 'Financial services consultant website'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
