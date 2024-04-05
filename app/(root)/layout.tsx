import StreamVideoProvider from "@/provider/StreamClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
}
