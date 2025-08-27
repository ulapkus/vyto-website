import vytas from "../../public/parralax/vytas.jpeg";
import Image from "next/image";

export default function Author() {
  return (
    <div className="chapter-text">
      <p className="title-author">About</p>
      <p className="chapter-text">
        Vytas Aukštuolis is a Lithuanian-American author whose work is shaped by
        a deep personal connection to Eastern Europe and over a decade of
        lobbying experience. His debut novel, Amber Queen, draws on his
        heritage, professional life, and lifelong engagement with questions of
        power, justice, and identity.
      </p>
      <p className="chapter-text">
        A seasoned advocate, Vytas has spent more than 10 years navigating the
        high-stakes world of lobbying. He has played a leading role in
        mobilizing the Lithuanian and broader Eastern European diaspora in the
        United States, advancing policy in support of the Baltic nations,
        Ukraine, a democratic Belarus, and other nations striving to resist
        authoritarian influence. As Russia launched its full-scale invasion of
        Ukraine in 2022, Vytas emerged as a key leader within the Central and
        East European Coalition (CEEC), an alliance of U.S.-based diaspora
        organizations. During his tenure, the CEEC helped maintain robust U.S.
        support for Ukraine by working closely with Congress, executive
        agencies, foreign embassies, and state governments.
      </p>
      <p className="chapter-text">
        Vytas also serves as Manager of International Relations at the American
        Council of Life Insurers (ACLI), a highly influential industry
        association based in Washington, D.C. ACLI represents over 200 life
        insurers, whose members have global operations and more than $8 trillion
        in assets.
      </p>
      <p className="chapter-text">
        His civic commitment is rooted in personal history. Three of his
        great-grandparents fled Lithuania at the end of the Nazi occupation—a
        time when Lithuania experienced the highest Holocaust murder rate in
        Europe. The stories of war and tyranny passed down through his family
        fuel the emotional core of his civic engagement.
      </p>
      <p className="chapter-text">
        Bilingual in English and Lithuanian, Vytas lives in Columbus, Ohio, with
        his wife. His literary influences span genres including The Handmaid’s
        Tale, Children of Blood and Bone, The Art of War, Poland by James
        Michener, the works of Rūta Šepetys, Baltic Religion by Jonas Trinkūnas,
        and sacred texts including the Holy Bible and the Quran. His writing
        combines political insight, ethnic memory, and emotional
        urgency—offering a voice at the intersection of history, myth, and the
        fight for a more just world.
      </p>
      <div className="author-image-container">
        <div className="author-image-container-inner">
          <Image src={vytas} alt="Vytas Aukštuolis" className="author-image" />
        </div>
        <div className="author-image-text">
          <p className="image-caption-one">Vytas Aukštuolis</p>
          <p className="image-caption-two">Vee-tuss Oak-sht whoah-liss</p>
        </div>
      </div>
    </div>
  );
}
