import Image from "next/image";
import chapterTwoImage from "../../public/bookimages/chapter2.png";

export default function ChapterTwoNew() {
  return (
    <div className="chapter-text">
      <p className="title">Chapter Two</p>
      <div className="chapter-img-container">
        <Image
          src={chapterTwoImage}
          alt="Chapter Two"
          className="chapter-one-img"
        />
      </div>

      <p>
        <i>“Oh, no no no no no no no no no no.”</i>
      </p>
      <p>
        <i>“What is it?”</i>
      </p>
      <p>
        <i>“Kastyti, that lightning strike cut my call with Harri.”</i>
      </p>
      <p>
        Kastytis let out a chuckle. And another two. Finally he bellied out a
        laugh.
      </p>
      <p>
        <i>
          "Didn’t a lightning strike interrupt something important before? You
          should stop angering Perkūnas.”
        </i>
      </p>

      <p>
        Jūratė grumbled. Perkūnas, thunder or even the thunder god himself, was
        indeed outside and mad.
      </p>
      <p>
        <i>
          “Yes this is the third time! And not funny, she’s probably terrified.”
        </i>
      </p>
      <p>
        <i>“What were you talking about?”</i>
      </p>
      <p>
        <i>“War.”</i>
      </p>
      <p>
        Kastytis laughed a little harder. <i>“She’s definitely terrified.”</i>
      </p>
      <p>
        Jūratė fell back onto their leather couch and threw her phone onto the
        coffee table.{" "}
        <i>
          “Why did you make our vacation retreat so disconnected from the
          outside world?”
        </i>
      </p>
      <p>
        <i>“Because you asked for it.”</i>
      </p>
      <p>
        <i>“Mmmmmmmm... But why did you listen to me?”</i>
      </p>
      <p>
        Kastytis started to develop that sinister look that said ‘maybe I should
        stop listening to you.’
      </p>
      <p>
        <i>
          “Kastyti, I’m starting to not like this conversation. You catch any
          fish before the storm today?”
        </i>
      </p>
    </div>
  );
}
