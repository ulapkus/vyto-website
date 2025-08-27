import Image from "next/image";
import chapterOneImage from "../../public/bookimages/chapter1.png";

export default function ChapterThreeNew() {
  return (
    <div className="chapter-text">
      <p className="title">Chapter Three</p>
      <div className="chapter-img-container">
        <Image
          src={chapterOneImage}
          alt="Chapter One"
          className="chapter-one-img"
        />
      </div>
      <p>
        <i>
          “The hell? What was that? What was that noise before the call
          dropped?”
        </i>
      </p>
      <p>
        President Jefferson pulled the phone away from her ear. Two staffers
        pulled out their phones and began typing away frantically.
      </p>
      <p>
        <i>
          “I can check with NSA, CIA, and EYE to see if there was a strike. See
          if Russia did anything.”
        </i>
      </p>
      <p>
        <i>“I’ll check if any news outlets are picking anything up.”</i>
      </p>
      <p>
        The President set the phone down as she stood up from behind the
        mahogany Resolute Desk.{" "}
        <i>
          “Let’s keep it low key for now, okay? Bring over IT to see if they can
          trace what happened with the call. I’ve got other things to do.”
        </i>
      </p>
      <p>
        The staffers didn’t look up from their phones as they stood up from
        their chairs. The President walked right past them towards the door.
        <i>
          “Call in David Perez. He might be able to help with Jura’s problem.”
        </i>
      </p>
      <p>
        <i>“The oil and gas lobbyist?”</i>
      </p>
      <p>
        The President stopped and turned around.{" "}
        <i>“You sound like you’ve got a problem with that.”</i>
      </p>
      <p>
        The staffer lowered his phone.{" "}
        <i>“Is there anyone we won’t work with?”</i>
      </p>
      <p>
        President Jefferson took a step towards him.{" "}
        <i>
          “You’ve got heart, my dear. Don’t lose that. I’ll show you what
          happens when you’ve got heart and are fearless.”
        </i>
      </p>
    </div>
  );
}
