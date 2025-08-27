import Image from "next/image";
import chapterOneImage from "../../public/bookimages/chapter1.png";

export default function ChapterOneNew() {
  return (
    <div className="chapter-text">
      <p className="title">Chapter One</p>
      <div className="chapter-img-container">
        <Image
          src={chapterOneImage}
          alt="Chapter One"
          className="chapter-one-img"
        />
      </div>
      <p>
        <i>“But Madame President, we’re going to die!”</i>
      </p>
      <p>
        There was a deep breath heard through the phone followed by a long sigh.
      </p>
      <p>
        <i>“My love, I know.”</i>
      </p>
      <p>
        <i>“And you still won’t help?”</i>
      </p>
      <p>
        This was out of character for the President. Ever since everyone called
        her ‘Harri’, Jūratė never knew now-President Harriet Jefferson to back
        down from a just fight. She was always on fire to change the world.
      </p>
      <p>
        <i>“You-rah..”</i> Harri was one of the last who called Jūratė by her
        American name – Jura. Waves of nostalgia filled Jūratė from the days
        when everyone unknowingly called her ‘Sea.’{" "}
        <i>
          “The American people don’t see why we should care about a war in
          Eastern Europe.”
        </i>
      </p>
      <p>
        Jūratė’s heart sank. Everyone and everything she knows, irrelevant.
        <i>“Please don’t look away. You can’t look away, Harri.”</i>
      </p>
      <p>
        <i>
          “I’m not looking away, my love. But I need to convince the American
          people. Tell me - when has American freedom ever had anything to do
          with Eastern Europe?”
        </i>
      </p>
      <p>
        <i>“Since the beginning! Ask your family.”</i>
      </p>
      <p>
        <i>“The Jefferson or Hemmings side? I’m trying to help.”</i>
      </p>
      <p>
        <i>“Both! But even now. What about hybrid warfare?”</i>
      </p>
      <p>
        <i>“Ok. What about hybrid warfare?”</i>
      </p>
      <p>
        <i>
          “Hybrid warfare is actively hurting America, but it’d be worse if it
          weren’t for us. You heard of–”
        </i>
      </p>
      <p>There was a crash outside. The line was cut. Did war finally come?</p>
    </div>
  );
}
