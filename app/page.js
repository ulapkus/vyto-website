"use client";

import React, { useState, useEffect } from "react";
import { useTransform, useMotionValue, useScroll, motion } from "framer-motion";
import sky from "../public/skyv3.png";
import castle from "../public/castlev3.png";
import lake from "../public/waterv3.png";
import amber from "../public/amberv3.png";
import queen from "../public/queenv3.png";
import Image from "next/image";
import fogOne from "../public/fogUpdated.png";
import underwater from "../public/underwaterv3.png";
import oneagain from "../public/image1.png";
import one from "../public/image1again.png";
import two from "../public/image2.png";
import three from "../public/image3.png";
import twoagain from "../public/image2again.png";
import threeagain from "../public/image3again.png";

export default function Landscape() {
  const [imageSrcOne, setImageSrcOne] = useState(one);
  const [imageSrcTwo, setImageSrcTwo] = useState(twoagain);
  const [imageSrcThree, setImageSrcThree] = useState(threeagain);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 for prologue, 1 for chapter 1, etc.

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);

  const scale = useTransform(scrollY, [0, 1000], [1.3, 1.0]);
  const scaleY = useTransform(scrollY, [0, 1000], [1, 0.5]);

  const bookPages = [
    `Golden sap wept from a pine and entombed a bee as ancient as Mount Everest. Millions of years later, the amber gem became the prized possession of Jūratė, the mermaid queen of the Baltic Sea. The entombed bee bobbed along with the current, the morning sun casting its light through the waves, illuminating the amber's golden glow.
Jūratė stared into its tiny, ancient eyes. In silence, they spoke: The Amber Bee chooses the Amber Queen.
What a fate—to rule over every fish, turtle, seagrass, and oyster in the sea, only to be ruled by a dead bee.
Golden sap wept And yet, she wanted this fate with every fiber of her being. She couldn't trust anyone else with this duty. No one else understood the threads that bound everything together the way she did. 
How the moon pulled at the sea. How violence and peace spread like tides. The connection between the past, present, and future. 
How men on land marched for war while the fish danced for freedom. Better to dance for freedom than march for war, she figured.
    Sure, her fate came with its perks. She inherited a castle made entirely of amber that encased an island. Perhaps it was because of the castle — or maybe because she was the daughter of the thunder god, Perkūnas — but the other mermaids revered her.
To the fish, she was a goddess. Even though like every ruler, they still found plenty to grumble about.
    That fateful morning, as Jūratė studied the Amber Bee, a hook made of bone dropped into the water before her. She had seen such hooks before—a clever trick humans used to turn fish into food.
    However, Jūratė decided that today would be a good day to play a trick back on the human who had set the trap. She reached out with her hands and gently tugged on the rope. The hook immediately rose, and Jūratė followed. She gave the rope another tug and again, the hook rose higher. Instead of tugging on the rope a third time, Jūratė began quickly swimming up to the surface.
Time slowed for the fisherman as he watched a strange woman shoot up from the water.
Where he expected legs was a fin as wide as he was tall. The giant fin flipped towards him, knocking him off his raft and into the water. In the same motion, she arched backward into a flawless backflip.
She plunged back into the waves, sending ripples through the water.

    The two were suspended in the water. The fisherman stared, wide- eyed—clearly, he had never seen a mermaid before.

Jūratė was surprised too. What could she say? He was handsome. His long hair flowed through the water. His eyes were a piercing green, unlike anything Jūratė had ever seen. The two swam up to the surface and continued to stare each other in the eye. Jūratė began to giggle, and the person followed suit.
    The giggling slowed, and Jūratė introduced herself. She pulled her hand towards her heart.
"Jūratė." You – Rah - Teh
The man had never heard a voice so beautiful. He blushed.
"Kastytis." Kuss – Tee - Tiss
    Just then, a sound of thunder rumbled overhead. To Kastytis, this meant he had to get his raft back to safety on the shore.
For Jūratė, it meant something completely different. It was a warning from her father: 'Don't be with this person.'
As quickly as she could, Jūratė helped Kastytis back into the raft. Then, she dove beneath the surface, stewing in silence, her thoughts turning against her father.
What the hell is wrong with finding a man handsome?
So when the rumbling eventually stopped and the moon had come up, Jūratė went looking for Kastytis.
She began to call out. "Kastyti! Kastyti!"
Nothing.
Again, Jūratė shouted, her voice rising. "Kastyti! Kastyti!"
Instead of a response from Kastytis, Jūratė saw a lightning bolt crash into the sea. The wrong being had heard the shouting.
Jūratė swiftly dove back beneath the waves and began swimming towards her castle. Ahead, a vast blackness loomed in the sea.
As she approached, she bumped into rocks and boulders, disoriented by the shadow. She wondered if the darkness of the night had played tricks on her eyes.
She made it to the blackness and reached out her hand.
Could he really have done it?!
It was her castle, directly struck by Perkūnas' lightning bolt. The castle began breaking apart into the expanse of the sea.
Jūratė shrieked. The fish darted away.
Jūratė raced up to the surface, feeling the rain on her skin. She looked to the heavens and screamed. "I will get my castle back. Whether in this life, the next, or however many generations it will take!"
Jūratė took a breath, held the Amber Bee, and promised. "Čia pranešimas." 
This is prophecy.
`,
    `Eleven thousand nine hundred thirty-nine years had passed since  the destruction of the Castle of the Sea. The day was warm— unusually warm for February. But these days, even the usual days  felt unusual. 
The low sun lit the light blue sky. The rays cleared through a  floating cloud, speckling a lake below. 
A man was sitting in his favorite rocking chair on the dock.  Undeterred by the black and white eagle circling overhead, he cast  a fishing line over the water. 
From behind sliding glass doors, a pair of blue eyes watched the  eagle pick a branch. It passed the quivering ash tree, as all other  birds do. But it also passed the majestic oak, the white-barked  birch, and the hanging threads of a weeping willow. 
The woman with the blue eyes stepped out from behind the  sliding glass doors, stepping to get a closer look at the visitor. Her  kids, home from college for the weekend, also watched from their  perches in the giant sycamore. 
The eagle flapped its wings and perched at the crown of a pine  tree. The woman's daughter, Eglė, smiled as the eagle settled on  her namesake.
5 
Shivering, a reminder that it was still February, the woman went  back inside to add layers. She glanced at a screen that showed the  latest news. The world felt like it had been falling apart for years,  but some news still managed to emanate disbelief. 
The US was beginning its steps to leave the Friends Together  Alliance. The House passed the 'America Alone Act.' 
For America, it was another break from the old world order. For  Eastern Europe, this meant its invisible shield was fizzling fast. 
The woman blinked her blue eyes, taking in the moment of the  occasion. Her bare feet turned her around, taking her to the shelf  by the record player. 
Her arm emerged from the thin linen shawl she found. It barely  covered the tattoo of a mermaid reaching out to an amber gem  that could be mistaken for a sun. A wedding ring designed by an  art deco artist guided her long fingers through the library of  records. 
The hand stopped on a black case with yellow words spelling  "Songs of the Vilna Ghetto." 
She pulled out the record from the case, maneuvering it to a  hovering record player table lined with a ring of amber  stones. The needle was guided to the edge of the disk. For a few  moments, the disk spun, giving a crackling hum. 
A steady beat pulsated through the house. As if marching towards  war, the voices began to sing 'Zog nit keyn mol'. 'Never Say' 
The séance began. 
Translation from Yiddish below.
6 
זאָ ג ניט קיין מאָ ל, אַ ז דו גייסט דעם לעצטן וועג, כאָ טש הימלען בלײַ ענע פֿאַ רשטעלן בלויע טעג. קומען וועט נאָ ך אונדזער אויסגעבענקטע שעה – ס׳וועט אַ פּויק טאָ ן אונדזער טראָ ט: מיר זײַ נען דאָ ! 
פֿון גרינעם פּאַ למענלאַ נד ביז ווײַ סן לאַ נד פֿון שניי, מיר קומען אָ ן מיט אונדזער פּײַ ן, מיט אונדזער וויי , און וווּ געפֿאַ לן ס׳איז אַ שפּריץ פֿון אונדזער בלוט, שפּראָ צן וועט דאָ רט אונדזער גבֿורה, אונדזער מוט ! 
ס׳וועט די מאָ רגנזון באַ גילדן אונדז דעם הײַ נט, און דער נעכטן וועט פֿאַ רשווינדן מיט דעם פֿײַ נט, נאָ ר אויב פֿאַ רזאַ מען וועט די זון אין דעם קאַ יאָ ר – ווי אַ פּאַ ראָ ל זאָ ל גיין דאָ ס ליד פֿון דור צו דור. 
דאָ ס ליד געשריבן איז מיט בלוט, און ניט מיט בלײַ , ס׳איז ניט קיין לידל פֿון אַ פֿויגל אויף דער פֿרײַ , דאָ ס האָ ט אַ פֿאָ לק צווישן פֿאַ לנדיקע ווענט  דאָ ס ליד געזונגען מיט נאַ גאַ נעס אין די הענט. 
טאָ זאָ ג ניט קיין מאָ ל, אַ ז דו גייסט דעם לעצטן וועג , כאָ טש הימלען בלײַ ענע פֿאַ רשטעלן בלויע טעג. קומען וועט נאָ ך אונדזער אויסגעבענקטע שעה – ס׳וועט אַ פּויק טאָ ן אונדזער טראָ ט: מיר זײַ נען דאָ !
7 
Never say that you're going your last way 
Although the skies filled with lead cover blue days Our promised hour will soon come 
Our marching steps ring out: 'We are here!' 
From green lands of palm to lands with white snow We come with our pain and our woes 
And from where a spurt of our blood falls 
Will sprout our strength and our courage 
Today the morning sun will accompany us 
And the night will fade away with the enemy 
But if the sun waits to rise 
Like a password this song will go from generation to generation 
This song is written with blood and not with [pencil] lead It's not a tune sung by birds in the wild 
This song was sung by people amidst collapsing walls Sung with pistols in their hands 
So never say that you're going your last way 
Although the skies filled with lead cover blue days Our promised hour will soon come 
Our marching steps ring out: 'We are here'!
8 
The righteous anger permeated from the voice against those who  executed an apocalypse on the land she loved and now walked— Lithuania. She called upon the spirits of the dead, seeking their  help in her fight for the living, so they might help prevent another  apocalypse from ravaging Eastern Europe. 
The song ended, and the sound of a single violin string brought  calm to the house. The woman allowed herself to feel the pain of  Eastern Europe. She let a single tear drop down her cheek. 
There's a time to ruminate on the past and fear for the future.  There's also a time to enjoy the present. 
She noticed the two times often lived side-by-side.  
The sliding glass doors opened, and a gentle breeze fluttered the  woman's blonde hair. She sank her feet into the cool grass, amazed  that she could walk barefoot in the winter. Feeling the ground  under her feet, she slithered through the grass. 
She approached the man at the dock, setting eyes on how she'd  spring upon the man without alerting him. Her gaze met that of  her two kids, perched in their favorite tree, still keeping watch over  the visiting eagle. Lifting a finger to her lips, she signaled for them  to stay quiet. Then, she crept up behind the fisherman and  whispered in his ear. 
"Kas – tee – tissssssssssssssssssssssssss" and she held onto the  final "sss" until Kastytis twitched his head away and dug his ear  into his shoulder. 
Then Kastytis bellowed in response, seeing how long he could roll  his 'r.' "You-rrrrrrrrrrrrrrrrr-ahh-tehh".
9 
Jūratė hugged his chest, kissing him on the back of the  head. "Ticklish?" 
Kastytis kept his shoulder to his ear. "Barely." 
The couple looked over the water sparkling in the sun. Jūratė took  a breath before sharing - yet again - her fears that their world was  headed for catastrophe. 
Instead, Kastytis brought up more pressing matters. "I caught a catfish. We're gonna eat good tonight." She couldn't change the subject now – she was hooked. "You cooking it with lemon and thyme?" 
Jūratė could practically hear the smile come from his face.  
"Rūkyta." Smoked, baby. This is gonna be the best Goddamned  fish you've ever had in your life. 
Wow, Jūratė found him sexy. She stood up from her hug and  walked over to the end of the dock. She let her feet dangle over  the edge, her toes lightly graced the top of the lake. 
Kastytis cast over another line into the water. He seemed at peace,  so why disturb the peace with her anxieties about the world? After  all, the US didn't leave the Friends Together Alliance, yet.  
Maybe it wasn't time to panic just yet, but it was long past time to  call an old friend. Jūratė dialed the number. At first, an unfamiliar  but pleasant voice answered the phone. 
"Hello, this is the White House. How may I direct your call?" 
"This is Jūratė Didžiulis. I'm looking for Harri – I mean President  Jefferson."
10 
"Ma'am, you may leave a message and I will pass along your  message to the appropriate staff. You said your name was You - rr…. I'm sorry, could you repeat your name?" 
There was some fumbling on the other end of the phone. Jūratė could hear distant chatter and what sounded like someone saying  her name. This time, a familiar voice came through. 
"Jura!!" 
"Harri!" Jūratė let out a bellied laugh. "I can't believe I actually  caught you." 
"Why haven't you called?! It feels like it's been forever." It had  only been a year, but the year really did feel like forever. 
"Because you're the President of the United States? Haven't you  been busy?" 
Harriett had been busy, but dearly missed her friends too. "Nah  you're right. Even now I've only got a minute, but I had to take  the call when I heard it was you.  
Let's catch up later, but what's up? You calling about the House  vote on the America Alone thing?" 
"How'd you guess?" 
Harriett was ready to vent. "Jura, you wouldn't believe the people I  have to deal with." Jūratė eased, knowing that it was still easy to  talk with her old friend and continued to listen. 
"So the House passed the America Alone Act, but that's not the  end. The bill still has to pass the Senate, but I'm afraid its chances  of passing there are high too." Jūratė was worried, but continued  to listen.
11 
"If the bill passes the Senate, I can still veto, but there might be  enough votes in the House and Senate to override my veto." 
Jūratė grasped for optimism. "Is it a done deal though? There still  a chance the US might not leave Friends Together?" 
"It's all up in the air Jura, but it's not looking good." President  Jefferson let the analysis sink in for a moment. 
"I'll do what I can, but it might not be enough. Too many  Americans just don't believe the world's problems affect them. Too many Americans don't think it's our job to protect our  friends." 
Jūratė struggled to understand. "But we're going to die, Harri." 
"I know. I know. Ugh, I hate to do this, but I have to run. Quickly  - how are the kids? Hawk and my buddy Eagle?" 
Jūratė laughed. "Only you can call them Hawk and Eagle. Hawk,  Vanagas, is good. He's still adjusting to college. Eagle, Eglė, still  talks about the time you two spent in Kyoto. She loved that." 
Harriett remembered the time fondly. "Eagle is really growing into  an amazing young woman. Tell her that Aunt Harriet would love  her counsel any time." 
Harriet could feel the polite smile through the phone.  "I'll pass the message. Okay, I'll let you get back to it." 
Harriet jumped back in. "Yes, I have to go. But it was nice hearing  you. I'll visit sometime soon. I think this business requires it." 
"That'd be lovely." 
With that, the call was done, but the message was clear for Jūratė.  Find protection or die.
`,
    `President Jefferson set the phone down. Her knees buckled. Atlas,  it appeared, set more weight on her shoulders. 
For years, a growing population in America felt like the  government hadn’t prioritized their needs. As a candidate, Harriet  made the promise that she’d pay attention. 
No matter how deeply she related to the story of a people starving  for freedom, starved by others who couldn’t understand or  empathize, her hands were tied. Democracy demanded it. 
She stood up tall and brought her chin up. She was President  Harriet Jefferson, after all. She wielded power that the first  President Jefferson couldn’t even imagine. 
She’d have to pull herself together before stepping into the Oval  to meet with David Perez. 
My dear reader, there is something you should understand about  David Perez. David Perez had a gravitational pull towards power.
13 
So when President Jefferson walked into the Oval, the air was  thick. Both monitored their breathing, careful not to let their  powers collide. 
David lifted his shoulder as he extended a handshake. President  Jefferson was grateful David opted for the shake over the hug. 
“How can I help you, David?” 
David watched as President Jefferson settled behind the Resolute  Desk, opened her notebook, and clicked her pen. Always with that  damn notebook. It unnerved him to be in the presence of such a  prepared politician. 
“Madam President, I’m here today on behalf of my client, the Oil,  Gas, & Green Energy Industry Association. They’re having a cow  about leaving the Friends Together Alliance.” 
President Jefferson jotted something in her notebook. “Oh yea?” 
David composed himself. “You remember the Great Power  Outage?” 
She peered over her glasses. “You mean the one where I had to  learn to heat my house by woodfire, communicate by letter, and  find out through the newspaper that this was happening just about  everywhere in the world?” 
David allowed a grin to emerge on his face. “Hmm. Can you be a  little more specific?” 
President Jefferson allowed a chuckle. “When the toilets wouldn’t  flush?”
14 
David pointed to her. “That’s the one!” 
It was finally good to laugh about the Great Power Outage. What  an awful time, though. Summers were horrible, Winters were the  worst. 
At least a lot of the technology still stuck around from the ‘Pre’  days. 
After a few chuckles, David let out a long sigh. “As you know,  Russia’s been racing to build and open up its oil and gas pipelines  into Europe ever since the power turned back on.” 
The pen didn’t lift from the notebook. 
“Well, my client has been watching closely and learned that the  pipelines are mainly flowing toward Western Europe, not Eastern.  Russia’s been blowing sand in the wind with its negotiations with a  lot of its closest neighbors.” 
“Maybe because its neighbors in Eastern Europe don’t trust  Russia?” 
David shrugged and pulled out a white envelope bordered with a  thin gold line. Harriet took it, feeling its suede-like texture. 
David spared no expense. 
He continued, “My client is hearing reports that Russian oil  oligarchs are pushing the Tsar to invade Eastern Europe rather  than settle for unfavorable negotiations. If we leave the FTA, the  door is wide open for them to invade.”
15 
“Shit.” She groaned as she opened the envelope. A small packet of  paper, stapled at a perfect 45-degree angle to the corner, provided  the intel. “I wish they’d just learn to negotiate instead of sending  their citizens to death.” 
David crossed his legs, laid one hand on top of the other, and  placed them on his knees. In this pose, he studied her. 
“Between you and me, and I’ve given this some thought, it’d be  much easier if Russia’s neighbors just united and defended  themselves instead of relying on our help.” 
President Jefferson scribbled profusely into her notebook. David  opened up his mouth to continue convincing her, but she held up  her hand. 
He backed down, and President Jefferson spun her chair around.  She walked to the window to look out. 
David sat there, deciding to let her think on his pitch. She kept  looking out the window, and David didn’t know what to do.  Should he look at her, his notebook, or out the window too? 
She turned around and went to her desk. She scribbled something  again, then looked back up. 
David sat there, waiting for her to break the silence. She didn’t.  Instead, she allowed a few more moments to sit in her thoughts. 
“Maybe we can let iron sharpen iron. Think you can unite them in  a single country?” 
“Who?”
16 
“Russia’s neighbors.” 
“You don’t want to check with the State Department or CIA?” 
She shook her head. “This can’t be coming from the American  government at all.” 
David winked. “Understood. And who’d pay me for this?” 
Harriet sat back in her chair. “Ask my friend Jura. She’s the head  of a multinational prison company that’s flipped a pretty penny  turning people away from violence. She should be able to pay for  your services, and you two can work your magic to prevent more  violence.” 
‘Work your magic.’ David loved the flattery. 
“Well, Madam President..” Now, he needed to be magical. 
He stood up, buttoning his jacket. This was certainly a challenge,  but one he couldn’t resist. 
“Before the end of my story, between the banks of the Baltic,  Black, and Adriatic Seas, a Great Nation will rise. That is a promise  I swear to you, to myself, and to my God.” 
President Jefferson shook his hand. She loved the confidence, but  doubted it all the same.
`,
  ];

  async function sendEmail() {
    // Get the email value from the input field
    const emailInput = document.querySelector(".email");
    const userInputEmail = emailInput?.value;

    // Validate that something was entered
    if (!userInputEmail || !userInputEmail.trim()) {
      alert("Please enter an email address in the input field.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "ulapkus@gmail.com", // Fixed recipient email
          subject: "New email from website signup",
          text: `Email submitted: ${userInputEmail}`, // Use the input as the email content
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        emailInput.value = "";
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email.");
    }
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const BookPreviewModal = () => {
    if (!showModal) return null;
    let pageTitle;
    if (currentPage === 0) {
      pageTitle = "Prologue";
    } else if (currentPage === 1) {
      pageTitle = "Chapter 1";
    } else {
      pageTitle = "Chapter 2";
    }

    return (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="book-content">
              <div className="prologue-text">{pageTitle}</div>
              {bookPages[currentPage].split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <BookPreviewModal />
      {/* add this */}
      <div className="signupsuccess">
        sign up successful! here are some sneak epeeks
      </div>
      <div className="amberqueencontainer">
        <Image src={amber} alt="" className="text" />
        <Image src={queen} alt="" className="text" />
      </div>
      <motion.div className="sky" style={{ y: y1, x: 0, scale }}>
        <Image src={sky} alt="sky" className="sky-inner" />
      </motion.div>
      <motion.div className="castle" style={{ y: y1, x: 0, scale }}>
        <Image src={castle} alt="castle" className="castle-inner" />
        <Image src={lake} alt="lake" className="lake-stationary-inner" />
      </motion.div>
      <motion.div className="fogOne" style={{ y: y1, x: 0, scale }}>
        <Image src={fogOne} alt="fogOne" className="fogone-inner" />
      </motion.div>
      <motion.div
        className="lake"
        style={{
          y: y2,
          x: 0,
          scaleX: scale.get(), // Maintain horizontal scaling
          scaleY: scaleY, // Apply vertical scaling only
        }}
      >
        <Image src={lake} alt="lake" className="lake-inner" />
      </motion.div>
      <motion.div
        className="underwater"
        style={{
          y: y3,
          x: 0,
        }}
      >
        <Image src={underwater} alt="underwater" className="underwater-inner" />
        <div className="underwater-text-container">
          <div className="underwater-text">Sign up for early sneak peeks</div>
          <div className="email-input">
            <input className="email" type="email" placeholder="Email" />
            <button className="sign-up-button" onClick={sendEmail}>
              <p className="sign-up">SIGN UP</p>
            </button>
          </div>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </motion.div>

      <div className="black-screen">
        <div className="underwater-image-container">
          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcTwo(two);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcTwo(twoagain);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(0); // Set to prologue
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcTwo} />
            <p className="text-one">Prologue</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcThree(three);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcThree(threeagain);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(1); // Set to chapter 1
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcThree} />
            <p className="text-one">Chapter 1</p>
          </div>

          <div
            className="container-two"
            style={{
              transition: "transform 0.6s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              setImageSrcOne(oneagain);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setImageSrcOne(one);
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              setCurrentPage(2); // Set to chapter 2
              setShowModal(true);
            }}
          >
            <Image className="underwater-image" alt="" src={imageSrcOne} />
            <p className="text-one">Chapter 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
