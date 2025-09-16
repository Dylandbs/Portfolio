
import PageWrapper from "../app/components/pageWrapper";
import "../styles/main.scss";


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
