/*import React, { useState } from 'react';
import Popup from '../Popup/Popup'; 
import './OptionsPage.css'; 

const OptionsPage = () => {
  const [popupText, setPopupText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const optionTexts = {
    option1: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twentysixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
    option2: 'THE UNION AND ITS TERRITORY 1.(1) India, that is Bharat, shall be a Union of States.(2) The States and the territories thereof shall be as specified in the First Schedule.(3) The territory of India shall comprise—(a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired. 2. Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit. 2A. Sikkim to be associated with the Union. Rep. by the Constitution (Thirty-sixth Amendment) Act, 1975 s. 5 (w.e.f. 26-4-1975). 3. Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or  parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State: Provided that no Bill for the purpose shall be introduced in either House of Parliament except on the recommendation of the President and unless, where the proposal contained in the Bill affects the area, boundaries or name of any of the States, the Bill has been referred by the President to the Legislature of that State for expressing its views thereon within such period as may be specified in the reference or within such further period as the President may allow and the period so specified or allowed has expired. Explanation I.—In this article, in clauses (a) to (e), State includes a Union territory, but in the proviso, State does not include a Union territory. Explanation II.—The power conferred on Parliament by clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory. 4. (1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.',
    option3: '',
    option4:'',
    option5:'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations. 39. The State shall, in particular, direct its policy towards securing (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;  (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women;(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength; (f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment. 39A. The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. 40. The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government. 41. The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want. 42. The State shall make provision for securing just and humane conditions of work and for maternity relief. 43. The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas. 43A. The State shall take steps, by suitable legislation or in any other way, to secure the participation of workers in the management of undertakings, establishments or other organisations engaged in any industry. 44. The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India. 45. The State shall endeavour to provide, within a period of ten years from the commencement of this Constitution, for free and compulsory education for all children until they complete the age of fourteen years. 46. The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation. 47. The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health. 48. The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle. 48A. The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country. 49. It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be. 50. The State shall take steps to separate the judiciary from the executive in the public services of the State. 51. The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organized peoples with one another; and (d) encourage settlement of international disputes by arbitration.',
    option6:'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different ',
  };

  const handleOptionClick = (option) => {
    setPopupText(optionTexts[option]);
    setShowPopup(true);
  };

  return (
    <div className='options-page'>
      <h2>Select an Option </h2>
      <div className='button-group'>
        {Object.keys(optionTexts).map((key) => (
          <button 
            key={key} 
            className='option-button' 
            onClick={() => handleOptionClick(key)}
          >
            {key.replace('option', 'Part ')}
          </button>
        ))}
      </div>
      {showPopup && (
        <Popup
          text={popupText}
          handleFetchResponse={() => }
          loading={false}
          error={null}
          responseText={null}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default OptionsPage; */

/*import React, { useState } from 'react';
import Popup from '../Popup/Popup'; 
import './OptionsPage.css'; 

const OptionsPage = () => {
  const [popupText, setPopupText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const optionTexts = {
    option1: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twentysixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
    option2: 'THE UNION AND ITS TERRITORY 1.(1) India, that is Bharat, shall be a Union of States.(2) The States and the territories thereof shall be as specified in the First Schedule.(3) The territory of India shall comprise—(a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired. 2. Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit. 2A. Sikkim to be associated with the Union. Rep. by the Constitution (Thirty-sixth Amendment) Act, 1975 s. 5 (w.e.f. 26-4-1975). 3. Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or  parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State: Provided that no Bill for the purpose shall be introduced in either House of Parliament except on the recommendation of the President and unless, where the proposal contained in the Bill affects the area, boundaries or name of any of the States, the Bill has been referred by the President to the Legislature of that State for expressing its views thereon within such period as may be specified in the reference or within such further period as the President may allow and the period so specified or allowed has expired. Explanation I.—In this article, in clauses (a) to (e), State includes a Union territory, but in the proviso, State does not include a Union territory. Explanation II.—The power conferred on Parliament by clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory. 4. (1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.',
    option3: '',
    option4:'',
    option5:'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations. 39. The State shall, in particular, direct its policy towards securing (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;  (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women;(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength; (f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment. 39A. The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. 40. The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government. 41. The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want. 42. The State shall make provision for securing just and humane conditions of work and for maternity relief. 43. The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas. 43A. The State shall take steps, by suitable legislation or in any other way, to secure the participation of workers in the management of undertakings, establishments or other organisations engaged in any industry. 44. The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India. 45. The State shall endeavour to provide, within a period of ten years from the commencement of this Constitution, for free and compulsory education for all children until they complete the age of fourteen years. 46. The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation. 47. The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health. 48. The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle. 48A. The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country. 49. It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be. 50. The State shall take steps to separate the judiciary from the executive in the public services of the State. 51. The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organized peoples with one another; and (d) encourage settlement of international disputes by arbitration.',
    option6:'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different ',
  };

  const handleOptionClick = (option) => {
    setPopupText(optionTexts[option]);
    setShowPopup(true);
  };

  return (
    <div className='options-page'>
      <h2>Select an Option</h2>
      <div className='button-group'>
        {Object.keys(optionTexts).map((key) => (
          <button 
            key={key} 
            className='option-button' 
            onClick={() => handleOptionClick(key)}
            disabled={!optionTexts[key]} // Disable if no text
            title={optionTexts[key] ? '' : 'Content not available yet'}
          >
            {key.replace('option', 'Part ')}
          </button>
        ))}
      </div>
      {showPopup && (
        <Popup
          text={popupText}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default OptionsPage; */

// src/components/OptionsPage/OptionsPage.js

/*import React, { useState } from 'react';
import Popup from '../Popup/Popup'; // Adjust the import path based on your folder structure
import './OptionsPage.css'; 

const OptionsPage = () => {
  const [popupData, setPopupData] = useState(null);

  const optionTexts = {
    option1: {
      mainText: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC...',
      simplifiedText: 'This is the simplified version of Part 1 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 1 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 1 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 1 کا آسان ورژن ہے۔'
      }
    },
    option2: {
      mainText: 'THE UNION AND ITS TERRITORY 1.(1) India, that is Bharat, shall be a Union of States...',
      simplifiedText: 'This is the simplified version of Part 2 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 2 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 2 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 2 کا آسان ورژن ہے۔'
      }
    },
    // Add similar objects for option3, option4, option5, and option6
    option3: {
      mainText: '...', // Add actual text
      simplifiedText: 'This is the simplified version of Part 3 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 3 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 3 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 3 کا آسان ورژن ہے۔'
      }
    },
    option4: {
      mainText: '...', // Add actual text
      simplifiedText: 'This is the simplified version of Part 4 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 4 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 4 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 4 کا آسان ورژن ہے۔'
      }
    },
    option5: {
      mainText: 'DIRECTIVE PRINCIPLES OF STATE POLICY 36. In this Part, unless the context otherwise requires...',
      simplifiedText: 'This is the simplified version of Part 5 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 5 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 5 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 5 کا آسان ورژن ہے۔'
      }
    },
    option6: {
      mainText: 'DIRECTIVE PRINCIPLES OF STATE POLICY 36. In this Part, unless the context otherwise requires...',
      simplifiedText: 'This is the simplified version of Part 6 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 6 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 6 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 6 کا آسان ورژن ہے۔'
      }
    },
  };

  const handleOptionClick = (option) => {
    setPopupData(optionTexts[option]);
  };

  return (
    <div className='options-page'>
      <h2>Select an Option</h2>
      <div className='button-group'>
        {Object.keys(optionTexts).map((key) => (
          <button 
            key={key} 
            className='option-button' 
            onClick={() => handleOptionClick(key)}
            disabled={!optionTexts[key].mainText} // Disable if no text
            title={optionTexts[key].mainText ? '' : 'Content not available yet'}
          >
            {key.replace('option', 'Part ')}
          </button>
        ))}
      </div>
      {popupData && (
        <Popup
          data={popupData}
          onClose={() => setPopupData(null)}
        />
      )}
    </div>
  );
};

export default OptionsPage;*/

// src/components/Hero/OptionsPage/OptionsPage.jsx

// src/components/Hero/OptionsPage/OptionsPage.jsx

// src/components/Hero/OptionsPage/OptionsPage.jsx

import React, { useState } from 'react';
import Popup from '../Popup/Popup'; 
import './OptionsPage.css'; 

const OptionsPage = () => {
  const [popupData, setPopupData] = useState(null);


  const optionTexts = {
    preamble: { 
      mainText: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twentysixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
      simplifiedText: 'Here is a simplified version of the Preamble to the Indian Constitution:We, the people of India, have decided to create India as a country that is independent, where everyone is treated equally, with no discrimination based on religion, and where the government is chosen by the people. We want to provide justice for everyone, whether social, economic, or political. We believe in the freedom to think, speak, follow any religion, and express beliefs freely. We want everyone to have equal opportunities and to treat one another like family, ensuring dignity, unity, and strength for the nation. On November 26, 1949, we officially adopted this Constitution for ourselves.',
      translations: {
        Hindi: 'हम, भारत के लोगों ने, भारत को एक स्वतंत्र देश के रूप में बनाने का निर्णय लिया है, जहां सभी के साथ समान व्यवहार किया जाता है, धर्म के आधार पर कोई भेदभाव नहीं होता है, और जहां सरकार लोगों द्वारा चुनी जाती है। हम हर किसी को न्याय दिलाना चाहते हैं, चाहे वह सामाजिक हो, आर्थिक हो या राजनीतिक। हम सोचने, बोलने, किसी भी धर्म का पालन करने और मान्यताओं को स्वतंत्र रूप से व्यक्त करने की स्वतंत्रता में विश्वास करते हैं। हम चाहते हैं कि सभी को समान अवसर मिलें और एक-दूसरे के साथ परिवार की तरह व्यवहार करें, जिससे राष्ट्र की गरिमा, एकता और ताकत सुनिश्चित हो सके। 26 नवंबर, 1949 को हमने आधिकारिक तौर पर इस संविधान को अपने लिए अपनाया।',
        Bengali: 'আমরা, ভারতের জনগণ, ভারতকে একটি স্বাধীন দেশ হিসাবে তৈরি করার সিদ্ধান্ত নিয়েছি, যেখানে প্রত্যেকের সাথে সমান আচরণ করা হয়, ধর্মের ভিত্তিতে কোনও বৈষম্য ছাড়াই এবং যেখানে সরকার জনগণ দ্বারা নির্বাচিত হয়। আমরা সামাজিক, অর্থনৈতিক বা রাজনৈতিক সকলের জন্য ন্যায়বিচার দিতে চাই। আমরা চিন্তা করার, কথা বলার, যে কোনও ধর্ম অনুসরণ করার এবং স্বাধীনভাবে বিশ্বাস প্রকাশ করার স্বাধীনতায় বিশ্বাস করি। আমরা চাই প্রত্যেকের সমান সুযোগ থাকুক এবং একে অপরের সাথে পরিবারের মতো আচরণ করুক, জাতির জন্য মর্যাদা, ঐক্য এবং শক্তি নিশ্চিত করুক। 26 নভেম্বর, 1949-এ, আমরা আনুষ্ঠানিকভাবে নিজেদের জন্য এই সংবিধান গ্রহণ করি।',
        Urdu: ''
      }
    },
    
      option1: {
        mainText: 'THE UNION AND ITS TERRITORY 1.(1) India, that is Bharat, shall be a Union of States.(2) The States and the territories thereof shall be as specified in the First Schedule.(3) The territory of India shall comprise—(a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired. 2. Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit. 2A. Sikkim to be associated with the Union. Rep. by the Constitution (Thirty-sixth Amendment) Act, 1975 s. 5 (w.e.f. 26-4-1975). 3. Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or  parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State: Provided that no Bill for the purpose shall be introduced in either House of Parliament except on the recommendation of the President and unless, where the proposal contained in the Bill affects the area, boundaries or name of any of the States, the Bill has been referred by the President to the Legislature of that State for expressing its views thereon within such period as may be specified in the reference or within such further period as the President may allow and the period so specified or allowed has expired. Explanation I.—In this article, in clauses (a) to (e), State includes a Union territory, but in the proviso, State does not include a Union territory. Explanation II.—The power conferred on Parliament by clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory. 4. (1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.',
        simplifiedText: 'Here is a simplified version of the article on The Union and Its Territory from the Indian Constitution:\n1. India, also known as Bharat, is made up of different States and Union Territories. The specific details of these are listed in the First Schedule of the Constitution.\n2. The Parliament can admit new States into the Union or create new States as it sees fit.\n3. Parliament has the power to:\na. Create a new State by dividing or merging existing States or adding new territories.\nb. Increase or decrease the size of any State.\nc. Change the boundaries or the name of any State.\nd. However, to make these changes, Parliament must first get a recommendation from the President and consult the concerned States legislature.\n4. Any law made under these powers will also update the First and Fourth Schedules (which list the States and their representation in Parliament) and include other necessary changes. This will not be considered a constitutional amendment.\nThis article basically outlines how the boundaries, names, and territories of Indian States and Union Territories can be changed by Parliament.\n',
        translations: {
          Hindi: '1. भारत, जिसे भारत के नाम से भी जाना जाता है, विभिन्न राज्यों और केंद्र शासित प्रदेशों से बना है। इनका विशिष्ट विवरण संविधान की प्रथम अनुसूची में सूचीबद्ध है। 2. संसद नए राज्यों को संघ में शामिल कर सकती है या जैसा उचित समझे नए राज्य बना सकती है। 3. संसद के पास यह शक्ति है: एक। मौजूदा राज्यों को विभाजित या विलय करके या नए क्षेत्र जोड़कर एक नया राज्य बनाएं। बी। किसी भी राज्य का आकार बढ़ाना या घटाना। सी। किसी राज्य की सीमाएँ या नाम बदलें। डी। हालाँकि, इन परिवर्तनों को करने के लिए, संसद को पहले राष्ट्रपति से सिफारिश लेनी होगी और संबंधित राज्य की विधायिका से परामर्श करना होगा। 4. इन शक्तियों के तहत बनाया गया कोई भी कानून पहली और चौथी अनुसूची (जिसमें राज्यों और संसद में उनके प्रतिनिधित्व की सूची है) को भी अद्यतन करेगा और अन्य आवश्यक परिवर्तन भी शामिल करेगा। इसे संवैधानिक संशोधन नहीं माना जाएगा. यह लेख मूल रूप से बताता है कि संसद द्वारा भारतीय राज्यों और केंद्र शासित प्रदेशों की सीमाओं, नामों और क्षेत्रों को कैसे बदला जा सकता है।',
          Bengali: '1. ভারত, ভারত নামেও পরিচিত, বিভিন্ন রাজ্য এবং কেন্দ্রশাসিত অঞ্চল নিয়ে গঠিত। এগুলোর সুনির্দিষ্ট বিবরণ সংবিধানের প্রথম তফসিলে তালিকাভুক্ত করা হয়েছে। 2. সংসদ নতুন রাজ্যগুলিকে ইউনিয়নে ভর্তি করতে পারে বা উপযুক্ত মনে করে নতুন রাজ্য তৈরি করতে পারে৷ 3. সংসদের ক্ষমতা রয়েছে: ক বিদ্যমান রাজ্যগুলিকে বিভক্ত বা একত্রিত করে বা নতুন অঞ্চল যুক্ত করে একটি নতুন রাজ্য তৈরি করুন। খ. কোন রাজ্যের আকার বাড়ান বা কমান। গ. যেকোনো রাজ্যের সীমানা বা নাম পরিবর্তন করুন। d যাইহোক, এই পরিবর্তনগুলি করতে, সংসদকে প্রথমে রাষ্ট্রপতির কাছ থেকে সুপারিশ পেতে হবে এবং সংশ্লিষ্ট রাজ্যের আইনসভার সাথে পরামর্শ করতে হবে। 4. এই ক্ষমতার অধীনে প্রণীত যেকোন আইন প্রথম এবং চতুর্থ তফসিল (যা রাজ্যগুলি এবং সংসদে তাদের প্রতিনিধিত্বের তালিকা) আপডেট করবে এবং অন্যান্য প্রয়োজনীয় পরিবর্তনগুলি অন্তর্ভুক্ত করবে। এটি সংবিধান সংশোধন বলে বিবেচিত হবে না। এই নিবন্ধটি মূলত রূপরেখা দেয় যে কীভাবে সংসদ দ্বারা ভারতীয় রাজ্য এবং কেন্দ্রশাসিত অঞ্চলগুলির সীমানা, নাম এবং অঞ্চলগুলি পরিবর্তন করা যেতে পারে৷',
          Urdu: ''
  }
  },
  option2: {
        mainText: 'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations. 39. The State shall, in particular, direct its policy towards securing (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;  (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women;(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength; (f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment. 39A. The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. 40. The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government. 41. The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want. 42. The State shall make provision for securing just and humane conditions of work and for maternity relief. 43. The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas. 43A. The State shall take steps, by suitable legislation or in any other way, to secure the participation of workers in the management of undertakings, establishments or other organisations engaged in any industry. 44. The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India. 45. The State shall endeavour to provide, within a period of ten years from the commencement of this Constitution, for free and compulsory education for all children until they complete the age of fourteen years. 46. The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation. 47. The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health. 48. The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle. 48A. The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country. 49. It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be. 50. The State shall take steps to separate the judiciary from the executive in the public services of the State. 51. The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organized peoples with one another; and (d) encourage settlement of international disputes by arbitration.',
        simplifiedText: 'Here is a simplified version of the Directive Principles of State Policy from the Indian Constitution:\n36. State means the same as it does in the Fundamental Rights section (Part III).\n37. These principles are not enforceable by the courts, but they are fundamental for governing the country, and it is the duty of the government to apply them when making laws.\n38. The State should work to improve peoples welfare by creating a society where justice social, economic, and political guides all institutions. It should reduce income inequality and ensure equal opportunities and fairness across different groups.\n39. The State should ensure:\na. Equal right to livelihood for men and women.\nb. Resources are used for the common good.\nc. Wealth does not get concentrated in the hands of a few.\nd. Equal pay for equal work for both men and women.\ne. Health and strength of the workers are protected, and children are not forced into work unsuitable for their age or strength.\nf. Children grow up in a healthy environment, free from exploitation.\n39A. The State should make sure the legal system provides justice equally and provides free legal aid to those who cannot afford it.\n40. The State should organise village councils (Panchayats) and give them the power to govern locally.\n41. The State should provide rights to work, education, and assistance in cases like unemployment, old age, sickness, and disability, within its resources.\n42. The State should ensure fair working conditions and provide maternity relief.  \n43. The State should ensure all workers, including agricultural and industrial workers, get fair wages and a decent standard of living. It should promote small industries, especially in rural areas.\n43A. Workers should have a role in managing industries.\n44. The State should aim for a uniform civil code across the country.\n45. The State should provide free and compulsory education to all children up to the age of 14.\n46. The State should take special care of the education and economic interests of weaker sections, especially Scheduled Castes and Tribes, and protect them from injustice.\n47. The State should improve health and living standards of the people, and work towards banning intoxicating drinks and drugs, except for medical purposes.\n48. The State should modernise farming and protect animals, especially cows and cattle, from slaughter.\n48A. The State should protect the environment and wildlife.\n49. The State must protect monuments and places of historical or artistic importance.\n50. The State should keep the judiciary separate from the executive in public services.\n51. The State should:\na. Promote international peace and security.\nb. Maintain fair relations with other nations.\nc. Respect international law and treaties.\nd. Encourage settling disputes through arbitration instead of conflict.\nThese principles guide the government in creating policies that promote justice, equality, and welfare for all citizens.',
        translations: {
          Hindi: '36. राज्य का अर्थ वही है जो मौलिक अधिकार खंड (भाग III) में है।\n37. ये सिद्धांत अदालतों द्वारा लागू नहीं किए जा सकते हैं, लेकिन वे देश के शासन के लिए मौलिक हैं, और सरकार का कर्तव्य है कि उन्हें कानून बनाते समय लागू किया जाए।\n38. राज्य को लोगों के कल्याण में सुधार करने के लिए काम करना चाहिए, ऐसा समाज बनाकर जहां न्याय सामाजिक, आर्थिक और राजनीतिक सभी संस्थानों का मार्गदर्शन करता है। इसे आय असमानता को कम करना चाहिए और विभिन्न समूहों में समान अवसर और निष्पक्षता सुनिश्चित करनी चाहिए।\n39. राज्य को सुनिश्चित करना चाहिए:\n a. पुरुषों और महिलाओं के लिए आजीविका का समान अधिकार।\n b. संसाधनों का उपयोग साझा भलाई के लिए किया जाता है।\n c. धन कुछ लोगों के हाथों में केंद्रित नहीं होता है।\n d. पुरुषों और महिलाओं दोनों के लिए समान कार्य के लिए समान वेतन।\n e. श्रमिकों के स्वास्थ्य और शक्ति का संरक्षण किया जाता है, और बच्चों को उनके उम्र या शक्ति के लिए अनुपयुक्त कार्य में मजबूर नहीं किया जाता है।\n f. बच्चे एक स्वस्थ वातावरण में बड़े होते हैं, शोषण से मुक्त।\n39A. राज्य को यह सुनिश्चित करना चाहिए कि कानूनी प्रणाली समान रूप से न्याय प्रदान करती है और उन लोगों को निःशुल्क कानूनी सहायता प्रदान करती है जो इसे वहन नहीं कर सकते।\n40. राज्य को ग्राम परिषदों (पंचायतों) का संगठन करना चाहिए और उन्हें स्थानीय रूप से शासन करने की शक्ति देनी चाहिए।\n41. राज्य को अपने संसाधनों के भीतर काम, शिक्षा और बेरोजगारी, वृद्धावस्था, बीमारी और विकलांगता जैसे मामलों में सहायता का अधिकार प्रदान करना चाहिए।\n42. राज्य को उचित कार्य स्थितियों और प्रसूति राहत सुनिश्चित करनी चाहिए।\n43. राज्य को यह सुनिश्चित करना चाहिए कि सभी श्रमिकों, जिनमें कृषि और औद्योगिक श्रमिक शामिल हैं, को उचित वेतन और जीवन स्तर प्राप्त हो। इसे छोटे उद्योगों को बढ़ावा देना चाहिए, विशेषकर ग्रामीण क्षेत्रों में।\n43A. श्रमिकों को उद्योगों के प्रबंधन में भूमिका होनी चाहिए।\n44. राज्य को देश भर में एक समान नागरिक संहिता का लक्ष्य रखना चाहिए।\n45. राज्य को 14 वर्ष की आयु तक सभी बच्चों को निःशुल्क और अनिवार्य शिक्षा प्रदान करनी चाहिए।\n46. राज्य को कमजोर वर्गों, विशेषकर अनुसूचित जाति और जनजाति के शिक्षा और आर्थिक हितों का विशेष ध्यान रखना चाहिए और उन्हें अन्याय से बचाना चाहिए।\n47. राज्य को लोगों के स्वास्थ्य और जीवन स्तर में सुधार करना चाहिए और मादक पेय और ड्रग्स पर प्रतिबंध लगाने की दिशा में काम करना चाहिए, सिवाय चिकित्सा उद्देश्यों के।\n48. राज्य को कृषि का आधुनिकीकरण करना चाहिए और जानवरों, विशेषकर गाय और मवेशी, को वध से बचाना चाहिए।\n48A. राज्य को पर्यावरण और वन्यजीवों का संरक्षण करना चाहिए।\n49. राज्य को ऐतिहासिक या कलात्मक महत्व के स्मारकों और स्थानों का संरक्षण करना चाहिए।\n50. राज्य को न्यायपालिका को सार्वजनिक सेवाओं में कार्यपालिका से अलग रखना चाहिए।\n51. राज्य को:\n a. अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देना चाहिए।\n b. अन्य राष्ट्रों के साथ उचित संबंध बनाए रखना चाहिए।\n c. अंतर्राष्ट्रीय कानून और संधियों का सम्मान करना चाहिए।\n d. विवादों को संघर्ष के बजाय मध्यस्थता के माध्यम से सुलझाने के लिए प्रोत्साहित करना चाहिए।\nये सिद्धांत सरकार को ऐसी नीतियां बनाने में मार्गदर्शन करते हैं जो सभी नागरिकों के लिए न्याय, समानता और कल्याण को बढ़ावा देती हैं।',
          Bengali: '36. রাজ্যের অর্থ হবে, মৌলিক অধিকার বিভাগ (পার্ট তিন) এর মতোই।\n37. এই নীতিগুলি আদালতের মাধ্যমে প্রয়োগযোগ্য নয়, তবে দেশ শাসনের জন্য এগুলি মৌলিক এবং সরকারের এগুলি আইন তৈরির সময় প্রয়োগ করার দায়িত্ব।\n38. রাজ্যের উচিত সামাজিক,অর্থনৈতিক এবং রাজনৈতিক ন্যায়বিচার দ্বারা পরিচালিত একটি সমাজ তৈরি করে মানুষের কল্যাণের উন্নতি করার চেষ্টা করা। এর উচিত আয় বৈষম্য হ্রাস করা এবং বিভিন্ন গোষ্ঠীর মধ্যে সমান সুযোগ এবং ন্যায্যতা নিশ্চিত করা।\n39. রাজ্যের উচিত নিশ্চিত করা:\na.পুরুষ ও মহিলাদের জন্য জীবিকার সমান অধিকার।\nb. সম্পদ সাধারণ কল্যাণের জন্য ব্যবহৃত হয়।\nc. সম্পদ কয়েকজনের হাতে কেন্দ্রীভূত হয় না।\nd. পুরুষ ও মহিলাদের জন্য সমান কাজের জন্য সমান বেতন।\ne. শ্রমিকদের স্বাস্থ্য ও শক্তি রক্ষা করা হয় এবং শিশুদের তাদের বয়স বা শক্তির জন্য অনুপযুক্ত কাজে বাধ্য করা হয় না।\nf. শিশুরা শোষণ থেকে মুক্ত একটি সুস্থ পরিবেশে বড় হয়।\n39A. রাজ্যের উচিত নিশ্চিত করা যে আইন ব্যবস্থা সমানভাবে ন্যায়বিচার প্রদান করে এবং যারা এটি দিতে পারে না তাদেরকে বিনামূল্যে আইনগত সহায়তা প্রদান করে।\n40. রাজ্যের উচিত গ্রাম পঞ্চায়ত গঠন করা এবং তাদের স্থানীয়ভাবে শাসনের ক্ষমতা দেওয়া।\n41.রাজ্যের উচিত তার সম্পদের মধ্যে কর্ম, শিক্ষা এবং বেকারত্ব, বার্ধক্য, অসুস্থতা এবং প্রতিবন্ধীতার মতো ক্ষেত্রে সহায়তা প্রদান করা।\n42.রাজ্যের উচিত ন্যায্য কর্ম পরিস্থিতি নিশ্চিত করা এবং মাতৃত্ব ছুটি প্রদান করা।\n43. রাজ্যের উচিত নিশ্চিত করা যে সমস্ত শ্রমিক, কৃষি ও শিল্প শ্রমিক সহ, ন্যায্য বেতন এবং যোগ্য জীবন মান পায়। এর উচিত বিশেষ করে গ্রামীণ এলাকায় ছোট শিল্প প্রচার করা।\n43A.শ্রমিকদের উচিত শিল্প পরিচালনায় ভূমিকা থাকা।\n44. রাজ্যের উচিত দেশজুড়ে একটি সুষম দেওয়ানি সংহিতা লক্ষ্য করা।\n45. রাজ্যের উচিত ১৪ বছর বয়স পর্যন্ত সকল শিশুকে বিনামূল্যে ও বাধ্যতামূলক শিক্ষা প্রদান করা।\n46. রাজ্যের উচিত দুর্বল শ্রেণীর, বিশেষ করে অনুসূচিত জাতি ও উপজাতিদের শিক্ষা ও অর্থনৈতিক স্বার্থের বিশেষ যত্ন নেওয়া এবং তাদের অন্যায় থেকে রক্ষা করা।\n47. রাজ্যের উচিত মানুষের স্বাস্থ্য ও জীবন মান উন্নত করা এবং চিকিৎসা ব্যবহার ছাড়া মাদকদ্রব্য ও মদ নিষিদ্ধ করার দিকে কাজ করা।\n48. রাজ্যের উচিত কৃষিকাজ আধুনিকীকরণ করা এবং প্রাণী, বিশেষ করে গরু ও গোবধ থেকে রক্ষা করা।\n48A. রাজ্যের উচিত পরিবেশ ও বন্যপ্রাণী রক্ষা করা।\n49. রাজ্যের উচিত ঐতিহাসিক বা শিল্পের গুরুত্বপূর্ণ স্মৃতিস্তম্ভ ও স্থান রক্ষা করা।\n50. রাজ্যের উচিত সরকারি সেবায় বিচার বিভাগকে নির্বাহী থেকে পৃথক রাখা।\n51. রাজ্যের উচিত:\na. আন্তর্জাতিক শান্তি ও নিরাপত্তা প্রচার করা।\nb. অন্য দেশের সাথে ন্যায্য সম্পর্ক বজায় রাখা।\nc. আন্তর্জাতিক আইন ও চুক্তি মানা।\nd. বিরোধ নিরসনের জন্য দ্বন্দ্বের পরিবর্তে মধ্যস্থতা উৎসাহিত করা। এই নীতিগুলি সরকারকে সকল নাগরিকের জন্য ন্যায়বিচার, সমতা এবং কল্যাণ প্রচারকারী নীতি তৈরিতে নির্দেশনা দেয়।',
          Urdu: ''
  }
  },

    /*option2: {
      mainText: 'PART 2: CITIZENS 1. ...',
      simplifiedText: 'This is the simplified version of Part 2 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 2 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 2 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 2 کا آسان ورژن ہے۔'
      }
    } */
    option3: {
      mainText: 'PART 3: THE STATE 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 3 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 3 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 3 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 3 کا آسان ورژن ہے۔'
      }
    },
    option4: {
      mainText: 'PART 4: THE CENTRAL GOVERNMENT 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 4 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 4 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 4 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 4 کا آسان ورژن ہے۔'
      }
    },
    option5: {
      mainText: 'PART 5: THE STATES 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 5 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 5 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 5 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 5 کا آسان ورژن ہے۔'
      }
    },
    option6: {
      mainText: 'PART 6: THE DISTRIBUTION OF POWERS 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 6 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 6 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 6 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 6 کا آسان ورژن ہے۔'
      }
    },
  };


  const handleOptionClick = (option) => {
    setPopupData(optionTexts[option]);
  };

  return (
    <div className='options-page'>
      <h1>Select an Option</h1>
      <div className='button-group'>
        
        <button 
          key="preamble" 
          className='option-button' 
          onClick={() => handleOptionClick('preamble')}
          disabled={!optionTexts['preamble'].mainText} // Disable if no text
          title={optionTexts['preamble'].mainText ? '' : 'Content not available yet'}
        >
          Preamble
        </button>

      
        {['option1', 'option2', 'option3', 'option4', 'option5', 'option6'].map((key) => (
          <button 
            key={key} 
            className='option-button' 
            onClick={() => handleOptionClick(key)}
            disabled={!optionTexts[key].mainText} // Disable if no text
            title={optionTexts[key].mainText ? '' : 'Content not available yet'}
          >
            {key.replace('option', 'Part ')}
          </button>
        ))}
      </div>
      {popupData && (
        <Popup
          data={popupData}
          onClose={() => setPopupData(null)}
        />
      )}
    </div>
  );
};

export default OptionsPage; 

/*import React, { useState } from 'react';
import Popup from '../Popup/Popup'; 
import './OptionsPage.css'; 

const OptionsPage = () => {
  const [popupData, setPopupData] = useState(null);

  const optionTexts = {
    preamble: { 
      mainText: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twentysixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
      simplifiedText: 'Here is a simplified version of the Preamble to the Indian Constitution:We, the people of India, have decided to create India as a country that is independent, where everyone is treated equally, with no discrimination based on religion, and where the government is chosen by the people. We want to provide justice for everyone, whether social, economic, or political. We believe in the freedom to think, speak, follow any religion, and express beliefs freely. We want everyone to have equal opportunities and to treat one another like family, ensuring dignity, unity, and strength for the nation. On November 26, 1949, we officially adopted this Constitution for ourselves.',
      translations: {
        Hindi: 'हम, भारत के लोगों ने, भारत को एक स्वतंत्र देश के रूप में बनाने का निर्णय लिया है, जहां सभी के साथ समान व्यवहार किया जाता है, धर्म के आधार पर कोई भेदभाव नहीं होता है, और जहां सरकार लोगों द्वारा चुनी जाती है। हम हर किसी को न्याय दिलाना चाहते हैं, चाहे वह सामाजिक हो, आर्थिक हो या राजनीतिक। हम सोचने, बोलने, किसी भी धर्म का पालन करने और मान्यताओं को स्वतंत्र रूप से व्यक्त करने की स्वतंत्रता में विश्वास करते हैं। हम चाहते हैं कि सभी को समान अवसर मिलें और एक-दूसरे के साथ परिवार की तरह व्यवहार करें, जिससे राष्ट्र की गरिमा, एकता और ताकत सुनिश्चित हो सके। 26 नवंबर, 1949 को हमने आधिकारिक तौर पर इस संविधान को अपने लिए अपनाया।',
        Bengali: 'আমরা, ভারতের জনগণ, ভারতকে একটি স্বাধীন দেশ হিসাবে তৈরি করার সিদ্ধান্ত নিয়েছি, যেখানে প্রত্যেকের সাথে সমান আচরণ করা হয়, ধর্মের ভিত্তিতে কোনও বৈষম্য ছাড়াই এবং যেখানে সরকার জনগণ দ্বারা নির্বাচিত হয়। আমরা সামাজিক, অর্থনৈতিক বা রাজনৈতিক সকলের জন্য ন্যায়বিচার দিতে চাই। আমরা চিন্তা করার, কথা বলার, যে কোনও ধর্ম অনুসরণ করার এবং স্বাধীনভাবে বিশ্বাস প্রকাশ করার স্বাধীনতায় বিশ্বাস করি। আমরা চাই প্রত্যেকের সমান সুযোগ থাকুক এবং একে অপরের সাথে পরিবারের মতো আচরণ করুক, জাতির জন্য মর্যাদা, ঐক্য এবং শক্তি নিশ্চিত করুক। 26 নভেম্বর, 1949-এ, আমরা আনুষ্ঠানিকভাবে নিজেদের জন্য এই সংবিধান গ্রহণ করি।',
        Urdu: ''
      }
    },
    
      option1: {
        mainText: 'THE UNION AND ITS TERRITORY 1.(1) India, that is Bharat, shall be a Union of States.(2) The States and the territories thereof shall be as specified in the First Schedule.(3) The territory of India shall comprise—(a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired. 2. Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit. 2A. Sikkim to be associated with the Union. Rep. by the Constitution (Thirty-sixth Amendment) Act, 1975 s. 5 (w.e.f. 26-4-1975). 3. Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or  parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State: Provided that no Bill for the purpose shall be introduced in either House of Parliament except on the recommendation of the President and unless, where the proposal contained in the Bill affects the area, boundaries or name of any of the States, the Bill has been referred by the President to the Legislature of that State for expressing its views thereon within such period as may be specified in the reference or within such further period as the President may allow and the period so specified or allowed has expired. Explanation I.—In this article, in clauses (a) to (e), State includes a Union territory, but in the proviso, State does not include a Union territory. Explanation II.—The power conferred on Parliament by clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory. 4. (1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.',
        simplifiedText: 'Here is a simplified version of the article on The Union and Its Territory from the Indian Constitution:\n1. India, also known as Bharat, is made up of different States and Union Territories. The specific details of these are listed in the First Schedule of the Constitution.\n2. The Parliament can admit new States into the Union or create new States as it sees fit.\n3. Parliament has the power to:\na. Create a new State by dividing or merging existing States or adding new territories.\nb. Increase or decrease the size of any State.\nc. Change the boundaries or the name of any State.\nd. However, to make these changes, Parliament must first get a recommendation from the President and consult the concerned States legislature.\n4. Any law made under these powers will also update the First and Fourth Schedules (which list the States and their representation in Parliament) and include other necessary changes. This will not be considered a constitutional amendment.\nThis article basically outlines how the boundaries, names, and territories of Indian States and Union Territories can be changed by Parliament.\n',
        translations: {
          Hindi: '1. भारत, जिसे भारत के नाम से भी जाना जाता है, विभिन्न राज्यों और केंद्र शासित प्रदेशों से बना है। इनका विशिष्ट विवरण संविधान की प्रथम अनुसूची में सूचीबद्ध है। 2. संसद नए राज्यों को संघ में शामिल कर सकती है या जैसा उचित समझे नए राज्य बना सकती है। 3. संसद के पास यह शक्ति है: एक। मौजूदा राज्यों को विभाजित या विलय करके या नए क्षेत्र जोड़कर एक नया राज्य बनाएं। बी। किसी भी राज्य का आकार बढ़ाना या घटाना। सी। किसी राज्य की सीमाएँ या नाम बदलें। डी। हालाँकि, इन परिवर्तनों को करने के लिए, संसद को पहले राष्ट्रपति से सिफारिश लेनी होगी और संबंधित राज्य की विधायिका से परामर्श करना होगा। 4. इन शक्तियों के तहत बनाया गया कोई भी कानून पहली और चौथी अनुसूची (जिसमें राज्यों और संसद में उनके प्रतिनिधित्व की सूची है) को भी अद्यतन करेगा और अन्य आवश्यक परिवर्तन भी शामिल करेगा। इसे संवैधानिक संशोधन नहीं माना जाएगा. यह लेख मूल रूप से बताता है कि संसद द्वारा भारतीय राज्यों और केंद्र शासित प्रदेशों की सीमाओं, नामों और क्षेत्रों को कैसे बदला जा सकता है।',
          Bengali: '1. ভারত, ভারত নামেও পরিচিত, বিভিন্ন রাজ্য এবং কেন্দ্রশাসিত অঞ্চল নিয়ে গঠিত। এগুলোর সুনির্দিষ্ট বিবরণ সংবিধানের প্রথম তফসিলে তালিকাভুক্ত করা হয়েছে। 2. সংসদ নতুন রাজ্যগুলিকে ইউনিয়নে ভর্তি করতে পারে বা উপযুক্ত মনে করে নতুন রাজ্য তৈরি করতে পারে৷ 3. সংসদের ক্ষমতা রয়েছে: ক বিদ্যমান রাজ্যগুলিকে বিভক্ত বা একত্রিত করে বা নতুন অঞ্চল যুক্ত করে একটি নতুন রাজ্য তৈরি করুন। খ. কোন রাজ্যের আকার বাড়ান বা কমান। গ. যেকোনো রাজ্যের সীমানা বা নাম পরিবর্তন করুন। d যাইহোক, এই পরিবর্তনগুলি করতে, সংসদকে প্রথমে রাষ্ট্রপতির কাছ থেকে সুপারিশ পেতে হবে এবং সংশ্লিষ্ট রাজ্যের আইনসভার সাথে পরামর্শ করতে হবে। 4. এই ক্ষমতার অধীনে প্রণীত যেকোন আইন প্রথম এবং চতুর্থ তফসিল (যা রাজ্যগুলি এবং সংসদে তাদের প্রতিনিধিত্বের তালিকা) আপডেট করবে এবং অন্যান্য প্রয়োজনীয় পরিবর্তনগুলি অন্তর্ভুক্ত করবে। এটি সংবিধান সংশোধন বলে বিবেচিত হবে না। এই নিবন্ধটি মূলত রূপরেখা দেয় যে কীভাবে সংসদ দ্বারা ভারতীয় রাজ্য এবং কেন্দ্রশাসিত অঞ্চলগুলির সীমানা, নাম এবং অঞ্চলগুলি পরিবর্তন করা যেতে পারে৷',
          Urdu: ''
  }
  },
  option2: {
        mainText: 'DIRECTIVE PRINCIPLES OF STATE POLICY  36. In this Part, unless the context otherwise requires, the State has the same meaning as in Part III. 37. The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. 38. (1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life. (2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations. 39. The State shall, in particular, direct its policy towards securing (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;  (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women;(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength; (f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment. 39A. The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. 40. The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government. 41. The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want. 42. The State shall make provision for securing just and humane conditions of work and for maternity relief. 43. The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas. 43A. The State shall take steps, by suitable legislation or in any other way, to secure the participation of workers in the management of undertakings, establishments or other organisations engaged in any industry. 44. The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India. 45. The State shall endeavour to provide, within a period of ten years from the commencement of this Constitution, for free and compulsory education for all children until they complete the age of fourteen years. 46. The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation. 47. The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health. 48. The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle. 48A. The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country. 49. It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be. 50. The State shall take steps to separate the judiciary from the executive in the public services of the State. 51. The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organized peoples with one another; and (d) encourage settlement of international disputes by arbitration.',
        simplifiedText: 'Here is a simplified version of the Directive Principles of State Policy from the Indian Constitution:\n36. State means the same as it does in the Fundamental Rights section (Part III).\n37. These principles are not enforceable by the courts, but they are fundamental for governing the country, and it is the duty of the government to apply them when making laws.\n38. The State should work to improve peoples welfare by creating a society where justice social, economic, and political guides all institutions. It should reduce income inequality and ensure equal opportunities and fairness across different groups.\n39. The State should ensure:\na. Equal right to livelihood for men and women.\nb. Resources are used for the common good.\nc. Wealth does not get concentrated in the hands of a few.\nd. Equal pay for equal work for both men and women.\ne. Health and strength of the workers are protected, and children are not forced into work unsuitable for their age or strength.\nf. Children grow up in a healthy environment, free from exploitation.\n39A. The State should make sure the legal system provides justice equally and provides free legal aid to those who cannot afford it.\n40. The State should organise village councils (Panchayats) and give them the power to govern locally.\n41. The State should provide rights to work, education, and assistance in cases like unemployment, old age, sickness, and disability, within its resources.\n42. The State should ensure fair working conditions and provide maternity relief.  \n43. The State should ensure all workers, including agricultural and industrial workers, get fair wages and a decent standard of living. It should promote small industries, especially in rural areas.\n43A. Workers should have a role in managing industries.\n44. The State should aim for a uniform civil code across the country.\n45. The State should provide free and compulsory education to all children up to the age of 14.\n46. The State should take special care of the education and economic interests of weaker sections, especially Scheduled Castes and Tribes, and protect them from injustice.\n47. The State should improve health and living standards of the people, and work towards banning intoxicating drinks and drugs, except for medical purposes.\n48. The State should modernise farming and protect animals, especially cows and cattle, from slaughter.\n48A. The State should protect the environment and wildlife.\n49. The State must protect monuments and places of historical or artistic importance.\n50. The State should keep the judiciary separate from the executive in public services.\n51. The State should:\na. Promote international peace and security.\nb. Maintain fair relations with other nations.\nc. Respect international law and treaties.\nd. Encourage settling disputes through arbitration instead of conflict.\nThese principles guide the government in creating policies that promote justice, equality, and welfare for all citizens.',
        translations: {
          Hindi: '36. राज्य का अर्थ वही है जो मौलिक अधिकार खंड (भाग III) में है।\n37. ये सिद्धांत अदालतों द्वारा लागू नहीं किए जा सकते हैं, लेकिन वे देश के शासन के लिए मौलिक हैं, और सरकार का कर्तव्य है कि उन्हें कानून बनाते समय लागू किया जाए।\n38. राज्य को लोगों के कल्याण में सुधार करने के लिए काम करना चाहिए, ऐसा समाज बनाकर जहां न्याय सामाजिक, आर्थिक और राजनीतिक सभी संस्थानों का मार्गदर्शन करता है। इसे आय असमानता को कम करना चाहिए और विभिन्न समूहों में समान अवसर और निष्पक्षता सुनिश्चित करनी चाहिए।\n39. राज्य को सुनिश्चित करना चाहिए:\n a. पुरुषों और महिलाओं के लिए आजीविका का समान अधिकार।\n b. संसाधनों का उपयोग साझा भलाई के लिए किया जाता है।\n c. धन कुछ लोगों के हाथों में केंद्रित नहीं होता है।\n d. पुरुषों और महिलाओं दोनों के लिए समान कार्य के लिए समान वेतन।\n e. श्रमिकों के स्वास्थ्य और शक्ति का संरक्षण किया जाता है, और बच्चों को उनके उम्र या शक्ति के लिए अनुपयुक्त कार्य में मजबूर नहीं किया जाता है।\n f. बच्चे एक स्वस्थ वातावरण में बड़े होते हैं, शोषण से मुक्त।\n39A. राज्य को यह सुनिश्चित करना चाहिए कि कानूनी प्रणाली समान रूप से न्याय प्रदान करती है और उन लोगों को निःशुल्क कानूनी सहायता प्रदान करती है जो इसे वहन नहीं कर सकते।\n40. राज्य को ग्राम परिषदों (पंचायतों) का संगठन करना चाहिए और उन्हें स्थानीय रूप से शासन करने की शक्ति देनी चाहिए।\n41. राज्य को अपने संसाधनों के भीतर काम, शिक्षा और बेरोजगारी, वृद्धावस्था, बीमारी और विकलांगता जैसे मामलों में सहायता का अधिकार प्रदान करना चाहिए।\n42. राज्य को उचित कार्य स्थितियों और प्रसूति राहत सुनिश्चित करनी चाहिए।\n43. राज्य को यह सुनिश्चित करना चाहिए कि सभी श्रमिकों, जिनमें कृषि और औद्योगिक श्रमिक शामिल हैं, को उचित वेतन और जीवन स्तर प्राप्त हो। इसे छोटे उद्योगों को बढ़ावा देना चाहिए, विशेषकर ग्रामीण क्षेत्रों में।\n43A. श्रमिकों को उद्योगों के प्रबंधन में भूमिका होनी चाहिए।\n44. राज्य को देश भर में एक समान नागरिक संहिता का लक्ष्य रखना चाहिए।\n45. राज्य को 14 वर्ष की आयु तक सभी बच्चों को निःशुल्क और अनिवार्य शिक्षा प्रदान करनी चाहिए।\n46. राज्य को कमजोर वर्गों, विशेषकर अनुसूचित जाति और जनजाति के शिक्षा और आर्थिक हितों का विशेष ध्यान रखना चाहिए और उन्हें अन्याय से बचाना चाहिए।\n47. राज्य को लोगों के स्वास्थ्य और जीवन स्तर में सुधार करना चाहिए और मादक पेय और ड्रग्स पर प्रतिबंध लगाने की दिशा में काम करना चाहिए, सिवाय चिकित्सा उद्देश्यों के।\n48. राज्य को कृषि का आधुनिकीकरण करना चाहिए और जानवरों, विशेषकर गाय और मवेशी, को वध से बचाना चाहिए।\n48A. राज्य को पर्यावरण और वन्यजीवों का संरक्षण करना चाहिए।\n49. राज्य को ऐतिहासिक या कलात्मक महत्व के स्मारकों और स्थानों का संरक्षण करना चाहिए।\n50. राज्य को न्यायपालिका को सार्वजनिक सेवाओं में कार्यपालिका से अलग रखना चाहिए।\n51. राज्य को:\n a. अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देना चाहिए।\n b. अन्य राष्ट्रों के साथ उचित संबंध बनाए रखना चाहिए।\n c. अंतर्राष्ट्रीय कानून और संधियों का सम्मान करना चाहिए।\n d. विवादों को संघर्ष के बजाय मध्यस्थता के माध्यम से सुलझाने के लिए प्रोत्साहित करना चाहिए।\nये सिद्धांत सरकार को ऐसी नीतियां बनाने में मार्गदर्शन करते हैं जो सभी नागरिकों के लिए न्याय, समानता और कल्याण को बढ़ावा देती हैं।',
          Bengali: '36. রাজ্যের অর্থ হবে, মৌলিক অধিকার বিভাগ (পার্ট তিন) এর মতোই।\n37. এই নীতিগুলি আদালতের মাধ্যমে প্রয়োগযোগ্য নয়, তবে দেশ শাসনের জন্য এগুলি মৌলিক এবং সরকারের এগুলি আইন তৈরির সময় প্রয়োগ করার দায়িত্ব।\n38. রাজ্যের উচিত সামাজিক,অর্থনৈতিক এবং রাজনৈতিক ন্যায়বিচার দ্বারা পরিচালিত একটি সমাজ তৈরি করে মানুষের কল্যাণের উন্নতি করার চেষ্টা করা। এর উচিত আয় বৈষম্য হ্রাস করা এবং বিভিন্ন গোষ্ঠীর মধ্যে সমান সুযোগ এবং ন্যায্যতা নিশ্চিত করা।\n39. রাজ্যের উচিত নিশ্চিত করা:\na.পুরুষ ও মহিলাদের জন্য জীবিকার সমান অধিকার।\nb. সম্পদ সাধারণ কল্যাণের জন্য ব্যবহৃত হয়।\nc. সম্পদ কয়েকজনের হাতে কেন্দ্রীভূত হয় না।\nd. পুরুষ ও মহিলাদের জন্য সমান কাজের জন্য সমান বেতন।\ne. শ্রমিকদের স্বাস্থ্য ও শক্তি রক্ষা করা হয় এবং শিশুদের তাদের বয়স বা শক্তির জন্য অনুপযুক্ত কাজে বাধ্য করা হয় না।\nf. শিশুরা শোষণ থেকে মুক্ত একটি সুস্থ পরিবেশে বড় হয়।\n39A. রাজ্যের উচিত নিশ্চিত করা যে আইন ব্যবস্থা সমানভাবে ন্যায়বিচার প্রদান করে এবং যারা এটি দিতে পারে না তাদেরকে বিনামূল্যে আইনগত সহায়তা প্রদান করে।\n40. রাজ্যের উচিত গ্রাম পঞ্চায়ত গঠন করা এবং তাদের স্থানীয়ভাবে শাসনের ক্ষমতা দেওয়া।\n41.রাজ্যের উচিত তার সম্পদের মধ্যে কর্ম, শিক্ষা এবং বেকারত্ব, বার্ধক্য, অসুস্থতা এবং প্রতিবন্ধীতার মতো ক্ষেত্রে সহায়তা প্রদান করা।\n42.রাজ্যের উচিত ন্যায্য কর্ম পরিস্থিতি নিশ্চিত করা এবং মাতৃত্ব ছুটি প্রদান করা।\n43. রাজ্যের উচিত নিশ্চিত করা যে সমস্ত শ্রমিক, কৃষি ও শিল্প শ্রমিক সহ, ন্যায্য বেতন এবং যোগ্য জীবন মান পায়। এর উচিত বিশেষ করে গ্রামীণ এলাকায় ছোট শিল্প প্রচার করা।\n43A.শ্রমিকদের উচিত শিল্প পরিচালনায় ভূমিকা থাকা।\n44. রাজ্যের উচিত দেশজুড়ে একটি সুষম দেওয়ানি সংহিতা লক্ষ্য করা।\n45. রাজ্যের উচিত ১৪ বছর বয়স পর্যন্ত সকল শিশুকে বিনামূল্যে ও বাধ্যতামূলক শিক্ষা প্রদান করা।\n46. রাজ্যের উচিত দুর্বল শ্রেণীর, বিশেষ করে অনুসূচিত জাতি ও উপজাতিদের শিক্ষা ও অর্থনৈতিক স্বার্থের বিশেষ যত্ন নেওয়া এবং তাদের অন্যায় থেকে রক্ষা করা।\n47. রাজ্যের উচিত মানুষের স্বাস্থ্য ও জীবন মান উন্নত করা এবং চিকিৎসা ব্যবহার ছাড়া মাদকদ্রব্য ও মদ নিষিদ্ধ করার দিকে কাজ করা।\n48. রাজ্যের উচিত কৃষিকাজ আধুনিকীকরণ করা এবং প্রাণী, বিশেষ করে গরু ও গোবধ থেকে রক্ষা করা।\n48A. রাজ্যের উচিত পরিবেশ ও বন্যপ্রাণী রক্ষা করা।\n49. রাজ্যের উচিত ঐতিহাসিক বা শিল্পের গুরুত্বপূর্ণ স্মৃতিস্তম্ভ ও স্থান রক্ষা করা।\n50. রাজ্যের উচিত সরকারি সেবায় বিচার বিভাগকে নির্বাহী থেকে পৃথক রাখা।\n51. রাজ্যের উচিত:\na. আন্তর্জাতিক শান্তি ও নিরাপত্তা প্রচার করা।\nb. অন্য দেশের সাথে ন্যায্য সম্পর্ক বজায় রাখা।\nc. আন্তর্জাতিক আইন ও চুক্তি মানা।\nd. বিরোধ নিরসনের জন্য দ্বন্দ্বের পরিবর্তে মধ্যস্থতা উৎসাহিত করা। এই নীতিগুলি সরকারকে সকল নাগরিকের জন্য ন্যায়বিচার, সমতা এবং কল্যাণ প্রচারকারী নীতি তৈরিতে নির্দেশনা দেয়।',
          Urdu: ''
  }
  },

    // Add actual mainText for option3 to option6 or handle placeholders appropriately
    option3: {
      mainText: 'PART 3: THE STATE 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 3 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 3 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 3 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 3 کا آسان ورژن ہے۔'
      }
    },

    option4: {
      mainText: 'PART 4: THE CENTRAL GOVERNMENT 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 4 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 4 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 4 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 4 کا آسان ورژن ہے۔'
      }
    },
    option5: {
      mainText: 'PART 5: THE STATES 1. ...', // Replace '...' with actual text
      simplifiedText: 'This is the simplified version of Part 5 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 5 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 5 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 5 کا آسان ورژن ہے۔'
      }
    },
    option6: {
      mainText: 'PART 6: THE DISTRIBUTION OF POWERS 1. ...', 
      simplifiedText: 'This is the simplified version of Part 6 of the Constitution.',
      translations: {
        Hindi: 'यह संविधान के भाग 6 का सरल संस्करण है।',
        Bengali: 'এটি সংবিধানের অংশ 6 এর সরলীকৃত সংস্করণ।',
        Urdu: 'یہ آئین کے حصہ 6 کا آسان ورژن ہے۔'
      }
    },
 
  };

  const handleOptionClick = (option) => {
    const data = optionTexts[option];
    console.log('Popup Data:', data); // Debugging line
    setPopupData(data);
  };

  return (
    <div className='options-page'>
      <h1>Select an Option</h1>
      <div className='button-group'>
    
        <button 
          key="preamble" 
          className='option-button' 
          onClick={() => handleOptionClick('preamble')}
          disabled={!optionTexts['preamble'].mainText} // Disable if no text
          title={optionTexts['preamble'].mainText ? '' : 'Content not available yet'}
        >
          Preamble
        </button>

       
        {['option1', 'option2', 'option3', 'option4', 'option5', 'option6'].map((key) => (
          <button 
            key={key} 
            className='option-button' 
            onClick={() => handleOptionClick(key)}
            disabled={!optionTexts[key].mainText || optionTexts[key].mainText === '...'} 
            title={optionTexts[key].mainText && optionTexts[key].mainText !== '...' ? '' : 'Content not available yet'}
          >
            {key.replace('option', 'Part ')}
          </button>
        ))}
      </div>
      {popupData && (
        <Popup
          data={popupData}
          onClose={() => setPopupData(null)}
        />
      )}
    </div>
  );
};

export default OptionsPage; */

