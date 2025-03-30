import Form from "../components/form";

export default function Author() {
  return (
    <div className="chapter-text">
      <p className="prologue-text">About the Author</p>
      <p>
        Vytas Aukstuolis is a 3rd (and 4th ) generation American. He grew up in
        a household that carried Lithuanian myth and language, which inspired
        his work. His background in lobbying gives him a front-row seat to watch
        the human side of power. Amber Queen is his debut novel.
      </p>
      <p>
        I&apos;d like to thank Ula Lapkus for creating the website, Ryan Teo for
        designing the website, and Jordan Mulligan for editing the novel.
      </p>
      <Form />
    </div>
  );
}
