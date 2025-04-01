import { Metadata } from "next";
import { pretendard } from "../fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "김소연의 포트폴리오",
  description: "안녕하세요. 프론트엔드 개발자 김소연입니다.",
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
      </head>
      <body className={pretendard.className}>
        <main id="root">
          {children}
          {modal}
        </main>
        <div id="modal-root" /> 
      </body>
    </html>
  );
}
