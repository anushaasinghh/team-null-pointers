import React, { useState } from 'react';
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
          handleFetchResponse={() => { /* Handle fetch response */ }}
          loading={false}
          error={null}
          responseText={null}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default OptionsPage;



 