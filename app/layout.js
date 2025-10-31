import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DokterID - Appointment App",
  description: "Aplikasi Konsultasi Dokter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              Made by Teuku Vaickal
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
