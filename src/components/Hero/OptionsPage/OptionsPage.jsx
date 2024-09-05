import React, { useState } from 'react';
import Popup from '../Popup/Popup'; 

const OptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [popupText, setPopupText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const optionTexts = {
    option1: `1. (1) This Act may be called the Bharatiya Nyaya Sanhita, 2023.
(2) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint, and different dates may be appointed for different provisions of this Sanhita.

(3) Every person shall be liable to punishment under this Sanhita and not otherwise for every act or omission contrary to the provisions thereof, of which he shall be guilty within India.
(4) Any person liable, by any law for the time being in force in India, to be tried for an offence committed beyond India shall be dealt with according to the provisions of this Sanhita for any act committed beyond India in the same manner as if such act had been committed within India.
(5) The provisions of this Sanhita shall also apply to any offence committed by—
(a) any citizen of India in any place without and beyond India;
(b) any person on any ship or aircraft registered in India wherever it may be;
(c) any person in any place without and beyond India committing offence targeting a computer resource located in India.
Explanation. In this section, the word offence includes every act committed outside India which, if committed in India, would be punishable under this Sanhita.
Illustration.
A, who is a citizen of India, commits a murder in any place without and beyond India. He can be tried and convicted of murder in any place in India in which he may be found.
(6) Nothing in this Sanhita shall affect the provisions of any Act for punishing mutiny and desertion of officers, soldiers, sailors or airmen in the service of the Government of India or the provisions of any special or local law.

2. In this Sanhita, unless the context otherwise requires—
(1) act denotes as well a series of acts as a single act;
(2) animal means any living creature, other than a human being;
(3) child means any person below the age of eighteen years;
(4) counterfeit. A person is said to counterfeit who causes one thing to resemble another thing, intending by means of that resemblance to practise deception, or knowing it to be likely that deception will thereby be practised.
Explanation 1. It is not essential to counterfeiting that the imitation should be exact.
Explanation 2. When a person causes one thing to resemble another thing, and the resemblance is such that a person might be deceived thereby, it shall be presumed, until the contrary is proved, that the person so causing the one thing to resemble the other thing intended by means of that resemblance to practise deception or knew it to be likely that deception would thereby be practised;
(5) Court means a Judge who is empowered by law to act judicially alone, or a body of Judges which is empowered by law to act judicially as a body, when such Judge or body of Judges is acting judicially;
(6) death means the death of a human being unless the contrary appears from the context;
(7) dishonestly means doing anything with the intention of causing wrongful gain to one person or wrongful loss to another person;
(8) document means any matter expressed or described upon any substance by means of letters, figures or marks, or by more than one of those means, and includes electronic and digital record, intended to be used, or which may be used, as evidence of that matter.
Explanation 1. It is immaterial by what means or upon what substance the letters, figures or marks are formed, or whether the evidence is intended for, or may be used in a Court or not.
Illustrations.
(a) A writing expressing the terms of a contract, which may be used as evidence of the contract, is a document.
(b) A cheque upon a banker is a document.
(c) A power-of-attorney is a document.
(d) A map or plan which is intended to be used or which may be used as evidence, is a document.
(e) A writing containing directions or instructions is a document.
Explanation 2. Whatever is expressed by means of letters, figures or marks as explained by mercantile or other usage, shall be deemed to be expressed by such letters, figures or marks within the meaning of this section, although the same may not be actually expressed.
Illustration.
A writes his name on the back of a bill of exchange payable to his order. The meaning of the endorsement, as explained by mercantile usage, is that the bill is to be paid to the holder. The endorsement is a document, and shall be construed in the same manner as if the words pay to the holder or words to that effect had been written over the signature;
(9) fraudulently means doing anything with the intention to defraud but not otherwise;
(10) gender. The pronoun he and its derivatives are used of any person, whether male, female or transgender.
Explanation. transgender shall have the meaning assigned to it in clause (k) of section 2 of the Transgender Persons (Protection of Rights) Act, 2019;
(11) good faith. Nothing is said to be done or believed in good faith which is done or believed without due care and attention;
(12) Government means the Central Government or a State Government;
(13) harbour includes supplying a person with shelter, food, drink, money, clothes, arms, ammunition or means of conveyance, or the assisting a person by any means, whether of the same kind as those enumerated in this clause or not, to evade apprehension;
(14) injury means any harm whatever illegally caused to any person, in body, mind, reputation or property;
(15) illegal and legally bound to do. The word illegal is applicable to everything which is an offence or which is prohibited by law, or which furnishes ground for a civil action; and a person is said to be legally bound to do whatever it is illegal in him to omit;
(16) Judge means a person who is officially designated as a Judge and includes a person—
(i) who is empowered by law to give, in any legal proceeding, civil or criminal, a definitive judgment, or a judgment which, if not appealed against, would be definitive, or a judgment which, if confirmed by some other authority, would be definitive; or
(ii) who is one of a body or persons, which body of persons is empowered by law to give such a judgment.
Illustration.
A Magistrate exercising jurisdiction in respect of a charge on which he has power to sentence to fine or imprisonment, with or without appeal, is a Judge;
(17) life means the life of a human being, unless the contrary appears from the context;
(18) local law means a law applicable only to a particular part of India;
(19) man means male human being of any age;
(20) month and year. Wherever the word month or the word year is used, it is to be understood that the month or the year is to be reckoned according to the Gregorian calendar;
(21) movable property includes property of every description, except land and things attached to the earth or permanently fastened to anything which is attached to the earth;
(22) number. Unless the contrary appears from the context, words importing the singular number include the plural number, and words importing the plural number include the singular number;
(23) oath includes a solemn affirmation substituted by law for an oath, and any declaration required or authorised by law to be made before a public servant or to be used for the purpose of proof, whether in a Court or not;
(24) offence. Except in the Chapters and sections mentioned in sub-clauses (a) and (b), the word offence means a thing made punishable by this Sanhita, but—
(a) in Chapter III and in the following sections, namely, sub-sections (2), (3), (4) and (5) of section 8, sections 9, 49, 50, 52, 54, 55, 56, 57, 58, 59, 60, 61, 119, 120, 123, sub-sections (7) and (8) of section 127, 222, 230, 231, 240, 248, 250, 251, 259, 260, 261, 262, 263, sub-sections (6) and (7) of section 308 and sub-section (2) of section 330, the word offence means a thing punishable under this Sanhita, or under any special law or local law; and
(b) in sub-section (1) of section 189, sections 211, 212, 238, 239, 249, 253 and sub-section (1) of section 329, the word offence shall have the same meaning when the act punishable under the special law or local law is punishable under such law with imprisonment for a term of six months or more, whether with or without fine;
(25) omission denotes as well a series of omissions as a single omission;
(26) person includes any company or association or body of persons, whether incorporated or not;
(27) public includes any class of the public or any community;
(28) public servant means a person falling under any of the descriptions`,
    option2: `4. The punishments to which offenders are liable under the provisions of this Sanhita are
(a) Death;
(b) Imprisonment for life;
(c) Imprisonment, which is of two descriptions, namely
  (1) Rigorous, that is, with hard labour
  (2) Simple
(d) Forfeiture of property
(e) Fine;
(f) Community Service.

5. The appropriate Government may, without the consent of the offender, commute any punishment under this Sanhita to any other punishment in accordance with section 474 of the Bharatiya Nagarik Suraksha Sanhita, 2023.
Explanation. For the purposes of this section the expression appropriate Government means,
(a) in cases where the sentence is a sentence of death or is for an offence against any law relating to a matter to which the executive power of the Union extends, the Central Government; and
(b) in cases where the sentence (whether of death or not) is for an offence against any law relating to a matter to which the executive power of the State extends, the Government of the State within which the offender is sentenced.

6. In calculating fractions of terms of punishment, imprisonment for life shall be reckoned as equivalent to imprisonment for twenty years unless otherwise provided.

7. In every case in which an offender is punishable with imprisonment which may be of either description, it shall be competent to the Court which sentences such offender to direct in the sentence that such imprisonment shall be wholly rigorous, or that such imprisonment shall be wholly simple, or that any part of such imprisonment shall be rigorous and the rest simple.

8. (1) Where no sum is expressed to which a fine may extend, the amount of fine to which the offender is liable is unlimited, but shall not be excessive.
(2) In every case of an offence
  (a) punishable with imprisonment as well as fine, in which the offender is sentenced to a fine, whether with or without imprisonment;
  (b) punishable with imprisonment or fine, or with fine only, in which the offender is sentenced to a fine,
it shall be competent to the Court which sentences such offender to direct by the sentence that, in default of payment of the fine, the offender shall suffer imprisonment for a certain term, in which imprisonment shall be in excess of any other imprisonment to which he may have been sentenced or to which he may be liable under a commutation of a sentence.
(3) The term for which the Court directs the offender to be imprisoned in default of payment of a fine shall not exceed one-fourth of the term of imprisonment which is the maximum fixed for the offence, if the offence be punishable with imprisonment as well as fine.
(4) The imprisonment which the Court imposes in default of payment of a fine or in default of community service may be of any description to which the offender might have been sentenced for the offence.
(5) If the offence is punishable with fine or community service, the imprisonment which the Court imposes in default of payment of the fine or in default of community service shall be simple, and the term for which the Court directs the offender to be imprisoned, in default of payment of fine or in default of community service, shall not exceed,
  (a) two months when the amount of the fine does not exceed five thousand rupees;
  (b) four months when the amount of the fine does not exceed ten thousand rupees; and
  (c) one year in any other case.
(6) (a) The imprisonment which is imposed in default of payment of a fine shall terminate whenever that fine is either paid or levied by process of law;
(b) If, before the expiration of the term of imprisonment fixed in default of payment, such a proportion of the fine be paid or levied that the term of imprisonment suffered in default of payment is not less than proportional to the part of the fine still unpaid, the imprisonment shall terminate.
Illustration.
A is sentenced to a fine of one thousand rupees and to four months imprisonment in default of payment. Here, if seven hundred and fifty rupees of the fine be paid or levied before the expiration of one month of the imprisonment, A will be discharged as soon as the first month has expired. If seven hundred and fifty rupees be paid or levied at the time of the expiration of the first month, or at any later time while A continues in imprisonment, A will be immediately discharged. If five hundred rupees of the fine be paid or levied before the expiration of two months of the imprisonment, A will be discharged as soon as the two months are completed. If five hundred rupees be paid or levied at the time of the expiration of those two months, or at any later time while A continues in imprisonment, A will be immediately discharged.

7. The fine, or any part thereof which remains unpaid, may be levied at any time within six years after the passing of the sentence, and if, under the sentence, the offender be liable to imprisonment for a longer period than six years, then at any time previous to the expiration of that period; and the death of the offender does not discharge from the liability any property which would, after his death, be legally liable for his debts.

9. (1) Where anything which is an offence is made up of parts, any of which parts is itself an offence, the offender shall not be punished with the punishment of more than one of such his offences, unless it be so expressly provided.
(2) Where
  (a) anything is an offence falling within two or more separate definitions of any law in force for the time being by which offences are defined or punished; or
  (b) several acts, of which one or more than one would by itself or themselves constitute an offence, constitute, when combined, a different offence,
the offender shall not be punished with a more severe punishment than the Court which tries him could award for any one of such offences.
Illustrations.
(a) A gives Z fifty strokes with a stick. Here A may have committed the offence of voluntarily causing hurt to Z by the whole beating, and also by each of the blows which make up the whole beating. If A were liable to punishment for every blow, he might be imprisoned for fifty years, one for each blow. But he is liable only to one punishment for the whole beating.
(b) But, if, while A is beating Z, Y interferes, and A intentionally strikes Y, here, as the blow given to Y is no part of the act whereby A voluntarily causes hurt to Z, A is liable to one punishment for voluntarily causing hurt to Z, and to another for the blow given to Y.

10. In all cases in which judgment is given that a person is guilty of one of several offences specified in the judgment, but that it is doubtful of which of these offences he is guilty, the offender shall be punished for the offence for which the lowest punishment is provided if the same punishment is not provided for all.

11. Whenever any person is convicted of an offence for which under this Sanhita the Court has power to sentence him to rigorous imprisonment, the Court may, by its sentence, order that the offender shall be kept in solitary confinement for any portion or portions of the imprisonment to which he is sentenced, not exceeding three months in the whole, according to the following scale,
(a) a time not exceeding one month if the term of imprisonment shall not exceed six months;
(b) a time not exceeding two months if the term of imprisonment shall exceed six months and shall not exceed one year;
(c) a time not exceeding three months if the term of imprisonment shall exceed one year.

12. In executing a sentence of solitary confinement, such confinement shall in no case exceed fourteen days at a time, with intervals between the periods of solitary confinement of not less duration than such periods; and when the imprisonment awarded shall exceed three months, the solitary confinement shall not exceed seven days in any one month of the whole imprisonment awarded, with intervals between the periods of solitary confinement of not less duration than such periods.

13. Whoever, having been convicted by a Court in India, of an offence punishable under Chapter X or Chapter XVII of this Sanhita with imprisonment of either description for a term of three years or upwards, shall be guilty of any offence punishable under either of those Chapters with like imprisonment for the like term, shall be subject for every such subsequent offence to imprisonment for life, or to imprisonment of either description for a term which may extend to ten years.`,
    option3: 'Details for Option 3...'
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setPopupText(optionTexts[option]);
    setShowPopup(true);
  };

  return (
    <div className='options-page'>
      <h2>Select an Option</h2>
      <button className='option-button' onClick={() => handleOptionClick('option1')}>
        Chapter 1
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option2')}>
        Chapter 2
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 3
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 4
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 5
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 6
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 7
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 8
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 9
      </button>
      <button className='option-button' onClick={() => handleOptionClick('option3')}>
        Chapter 10
      </button>
      {showPopup && (
        <Popup
          text={popupText}
          selectedOption={selectedOption}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default OptionsPage;

 