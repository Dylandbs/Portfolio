import PageWrapper from "../app/components/pageWrapper";
import Footer from "../app/components/footer";
import "../styles/main.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
