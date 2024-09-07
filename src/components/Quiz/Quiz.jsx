
import React, { useState } from 'react';
import './Quiz.css'; 
import Beginner from '../../assets/begin.jpeg';
import Intermediate from '../../assets/inter.jpeg';
import Advance from '../../assets/adv.jpeg';

const beginnerQuestions = [
  {  question: "Which Article of the Indian Constitution provides for the creation of new states?",
    answers: [
        {text: "Aricle 1", correct: false},
        {text: "Aricle 3", correct: true},
        {text: "Aricle 25", correct: false},
        {text: "Aricle 20", correct: false},
    ]
},
{
    question: "Who is the custodian of the Indian Constitution?? ",
    answers: [
        {text: "Prime Minister", correct: false},
        {text: "President", correct: false},
        {text: "Chief Justice of India", correct: true},
        {text: "Speaker of the Lok Sabha", correct: false},
    ]
},
{
    question: "Which amendment to the Indian Constitution is known as the 'mini Constitution'? ",
    answers: [
        {text: " 24th Amendment", correct: false},
        {text: "42nd Amendment", correct: true},
        {text: "44th Amendment", correct: false},
        {text: "52nd Amendment", correct: false},
    ]
},
{
    question: "The Fundamental Rights are enshrined in which part of the Indian Constitution? ",
    answers: [
        {text: "Part III", correct: true},
        {text: "Part IV", correct: false},
        {text: "Part V", correct: false},
        {text: "Part VI", correct: false},
    ]
},
{
    question: "Which Article deals with the President's powers to grant pardons?",
    answers: [
        {text: "Article 72", correct: true},
        {text: "Article 74", correct: false},
        {text: "Article 80", correct: false},
        {text: "Article 87", correct: false},
    ]
},
{
    question: "The Directive Principles of State Policy are contained in which part of the Constitution??",
    answers: [
        {text: "Part II", correct: false},
        {text: "Part III", correct: false},
        {text: "Part IV", correct: true},
        {text: "Part V", correct: false},
    ]
},
{
    question: "The Rajya Sabha is a permanent body and is not subject to dissolution. How often are its members elected?",
    answers: [
        {text: "Every 2 years", correct: true},
        {text: "Every 3 years", correct: false},
        {text: "Every 4 years", correct: false},
        {text: "Every 5 years", correct: false},
    ]
},
{
    question: "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
    answers: [
        {text: "Sardar Vallabhbhai Patel", correct: false},
        {text: "Jawaharlal Nehru", correct: false},
        {text: "B.R. Ambedkar", correct: true},
        {text: "Rajendra Prasad", correct: false},
    ]
},
{
    question: "Which Article of the Indian Constitution empowers the President to dissolve the Lok Sabha?",
    answers: [
        {text: "Article 73", correct: false},
        {text: "Article 74", correct: false},
        {text: "Article 85", correct: true},
        {text: "Article 88", correct: false},
    ]
},
{
    question: "Under which Article can the President declare a state of emergency?",
    answers: [
        {text: "Article 352", correct: true},
        {text: "Article 356", correct: false},
        {text: "Article 360", correct: false},
        {text: "Article 370", correct: false},
    ]
},
{
    question: "The Indian Constitution was adopted on which date?",
    answers: [
        {text: "15th August 1947", correct: false},
        {text: "26th January 1950", correct: false},
        {text: "26th November 1949", correct: true},
        {text: "1st January 1950", correct: false},
    ]
},
{
    question: "The concept of 'Judicial Review' in India is derived from which of the following?",
    answers: [
        {text: "British Constitution", correct: false},
        {text: "American Constitution", correct: true},
        {text: "French Constitution", correct: false},
        {text: "Canadian Constitution", correct: false},
    ]
},
{
    question: "Which Constitutional Article provides for the protection of linguistic minorities?",
    answers: [
        {text: "Article 29", correct: true},
        {text: "Article 30", correct: false},
        {text: "Article 31", correct: false},
        {text: "Article 32", correct: false},
    ]
},
{
    question: "Which Article of the Indian Constitution deals with the powers and responsibilities of the Prime Minister?",
    answers: [
        {text: "Article 74", correct: false},
        {text: "Article 75", correct: true},
        {text: "Article 76", correct: false},
        {text: "Article 77", correct: false},
    ]
},
{
    question: "Which Article of the Indian Constitution provides for the establishment of the Supreme Court?",
    answers: [
        {text: "Article 124", correct: true},
        {text: "Article 125", correct: false},
        {text: "Article 126", correct: false},
        {text: "Article 127", correct: false},
    ]
},
{
    question: "Who appoints the Governor of a State?",
    answers: [
        {text: "Chief Minister", correct: false},
        {text: "Chief Justice of India", correct: false},
        {text: "President of India", correct: true},
        {text: "Prime Minister", correct: false},
    ]
},
{
    question: "What is the minimum age required to be elected as a Member of the Rajya Sabha?",
    answers: [
        {text: "25 years", correct: false},
        {text: "30 years", correct: true},
        {text: "35 years", correct: false},
        {text: "40 years", correct: false},
    ]
},
{
    question: "Which Article in the Indian Constitution mandates the establishment of Panchayats?",
    answers: [
        {text: "Article 243A", correct: false},
        {text: "Article 243B", correct: true},
        {text: "Article 243C", correct: false},
        {text: "Article  243D", correct: false},
    ]
},
{
    question: "Which amendment introduced the provision for reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha?",
    answers: [
        {text: "70th Amendment", correct: false},
        {text: "73rd Amendment", correct: false},
        {text: "74th Amendment", correct: false},
        {text: "85th Amendment", correct: true},
    ]
},
{
    question: "Who has the power to dissolve the Rajya Sabha?",
    answers: [
        {text: "The President", correct: false},
        {text: "The Prime Minister", correct: false},
        {text: "The Speaker of the Lok Sabha", correct: false},
        {text: "The Rajya Sabha cannot be dissolved", correct: true},
    ]
},
{
    question: "Which Article of the Indian Constitution deals with the protection of human rights?",
    answers: [
        {text: "Article 21", correct: true},
        {text: "Article 22", correct: false},
        {text: "Article 23", correct: false},
        {text: "Article 24", correct: false},
    ]
},
{
    question: "The Indian Constitution provides for which type of government system?",
    answers: [
        {text: "Unitary", correct: false},
        {text: "Federal", correct: true},
        {text: "Confederal", correct: false},
        {text: "Confederate", correct: false},
    ]
},
{
    question: "Under which Article can the President of India remove the Chief Election Commissioner?",
    answers: [
        {text: "Article 312", correct: false},
        {text: "Article 313", correct: false},
        {text: "Article 324", correct: true},
        {text: "Article 338", correct: false},
    ]
},
{
    question: "Which Constitutional Article provides for the abolition of untouchability?",
    answers: [
        {text: "Article 15", correct: false},
        {text: "Article 16", correct: false},
        {text: "Article 17", correct: true},
        {text: "Article 18", correct: false},
    ]
},
{
    question: "Which Article empowers the Parliament to legislate on matters under the Union List?",
    answers: [
        {text: "Article 245", correct: false},
        {text: "Article 246", correct: true},
        {text: "Article 247", correct: false},
        {text: "Article 248", correct: false},
    ]
},
{
    question: "Which Constitutional body is responsible for conducting elections in India?",
    answers: [
        {text: "Supreme Court", correct: false},
        {text: "Election Commission", correct: true},
        {text: "Union Public Service Commission", correct: false},
        {text: "National Human Rights Commission", correct: false},
    ]
},
{
    question: "The concept of 'separation of powers' in the Indian Constitution is borrowed from which country's constitution?",
    answers: [
        {text: "United Kingdom", correct: false},
        {text: "United States", correct: true},
        {text: "Australia", correct: false},
        {text: "France", correct: false},
    ]
},
{
    question: "Which Article of the Indian Constitution allows the Parliament to make laws on matters in the State List under certain circumstances?",
    answers: [
        {text: "Article 249", correct: false},
        {text: "Article 250", correct: true},
        {text: "Article 251", correct: false},
        {text: "Article 252", correct: false},
    ]
},
{
    question: "What is the maximum term duration for the President of India?",
    answers: [
        {text: "4 years", correct: false},
        {text: "5 years", correct: true},
        {text: "6 years", correct: false},
        {text: "7 years", correct: false},
    ]
},
{
    question: "Which Constitutional Amendment introduced the provision for the establishment of the National Commission for Scheduled Castes and Scheduled Tribes?",
    answers: [
        {text: "77th Amendment", correct: false},
        {text: "82nd Amendment", correct: false},
        {text: "89th Amendment", correct: true},
        {text: "93rd Amendment", correct: false},
    ]
},
];

const intermediateQuestions = [
    {
        question: "Which Article of the Indian Constitution provides for the amendment of the Constitution?",
        answers: [
            {text: "Aricle 352", correct: false},
            {text: "Aricle 360", correct: false},
            {text: "Aricle 368", correct: true},
            {text: "Aricle 370", correct: false},
        ]
    },
    {
        question: "Which of the following is not explicitly mentioned in the Preamble of the Indian Constitution?",
        answers: [
            {text: "Justice", correct: false},
            {text: "Equality", correct: false},
            {text: "Liberty", correct: true},
            {text: "Fraternity", correct: false},
        ]
    },
    {
        question: "Under which Article can the President of India suspend the enforcement of Fundamental Rights during a National Emergency?",
        answers: [
            {text: "Article 352", correct: false},
            {text: "Article 356", correct: false},
            {text: "Article 359", correct: true},
            {text: "Article 360", correct: false},
        ]
    },
    {
        question: "Which Constitutional Amendment introduced the Anti-Defection Law?",
        answers: [
            {text: "42nd Amendment", correct: false},
            {text: "44th Amendment", correct: false},
            {text: "52nd Amendment", correct: true},
            {text: "61st Amendment", correct: false},
        ]
    },
    {
        question: "What is the maximum duration within which a proclamation of National Emergency must be approved by both Houses of Parliament?",
        answers: [
            {text: "One month", correct: false},
            {text: "Two months", correct: true},
            {text: "Six months", correct: false},
            {text: "Three months", correct: false},
        ]
    },
    {
        question: "Which Article provides for the establishment of a High Court for the States?",
        answers: [
            {text: "Article 214", correct: true},
            {text: "Article 215", correct: false},
            {text: "Article 216", correct: false},
            {text: "Article 217", correct: false},
        ]
    },
    {
        question: "Which of the following Schedules of the Indian Constitution deals with the allocation of powers and functions between the Union and States?",
        answers: [
            {text: "Fifth Schedule", correct: false},
            {text: "Sixth Schedule", correct: false},
            {text: "Seventh Schedule", correct: true},
            {text: "Eighth Schedule", correct: false},
        ]
    },
    {
        question: "Which Constitutional Amendment removed the Right to Property from the list of Fundamental Rights?",
        answers: [
            {text: "42nd Amendment", correct: false},
            {text: "44th Amendment", correct: true},
            {text: "52nd Amendment", correct: false},
            {text: "61st Amendment", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution guarantees the right to freedom of religion?",
        answers: [
            {text: "Article 21", correct: false},
            {text: "Article 25", correct: true},
            {text: "Article 29", correct: false},
            {text: "Article 32", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution authorizes the Parliament to form a new state by separating territory from any state?",
        answers: [
            {text: "Article 2", correct: false},
            {text: "Article 3", correct: true},
            {text: "Article 4", correct: false},
            {text: "Article 5", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the procedure for the impeachment of the President?",
        answers: [
            {text: "Article 56", correct: false},
            {text: "Article 61", correct: true},
            {text: "Article 72", correct: false},
            {text: "Article 75", correct: false},
        ]
    },
    {
        question: "Which Constitutional provision allows the President to consult the Supreme Court on any question of law or fact?",
        answers: [
            {text: "Article 131", correct: false},
            {text: "Article 132", correct: false},
            {text: "Article 143", correct: true},
            {text: "Article 144", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the Right to Education?",
        answers: [
            {text: "Article 19", correct: false},
            {text: "Article 21A", correct: true},
            {text: "Article 23", correct: false},
            {text: "Article 30", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution mandates the establishment of a Finance Commission?",
        answers: [
            {text: "Article 280", correct: true},
            {text: "Article 282", correct: false},
            {text: "Article 290", correct: false},
            {text: "Article 300", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the appointment of the Attorney General of India?",
        answers: [
            {text: "Article 75", correct: false},
            {text: "Article 76", correct: true},
            {text: "Article 77", correct: false},
            {text: "Article 78", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution empowers the President to issue ordinances?",
        answers: [
            {text: "Article 123", correct: true},
            {text: "Article 124", correct: false},
            {text: "Article 126", correct: false},
            {text: "Article 127", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the imposition of President's Rule in a state?",
        answers: [
            {text: "Article 352", correct: false},
            {text: "Article 356", correct: true},
            {text: "Article 360", correct: false},
            {text: "Article 370", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution allows the Governor to reserve a bill for the consideration of the President?",
        answers: [
            {text: "Article 200", correct: true},
            {text: "Article 201", correct: false},
            {text: "Article 202", correct: false},
            {text: "Article 203", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the protection of monuments of historical importance?",
        answers: [
            {text: "Article 48", correct: false},
            {text: "Article 49", correct: true},
            {text: "Article 50", correct: false},
            {text: "Article 51", correct: false},
        ]
    },
    {
        question: "Which Constitutional Amendment introduced the concept of Cooperative Societies in the Indian Constitution?",
        answers: [
            {text: "86th Amendment", correct: false},
            {text: "97th Amendment", correct: true},
            {text: "100th Amendment", correct: false},
            {text: "101st Amendment", correct: false},
        ]
    },
    {
        question: "Under which Article of the Indian Constitution can the Supreme Court issue writs for the enforcement of Fundamental Rights?",
        answers: [
            {text: "Article 32", correct: true},
            {text: "Article 136", correct: false},
            {text: "Article 226", correct: false},
            {text: "Article 245", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution prohibits the practice of untouchability?",
        answers: [
            {text: "Article 14", correct: false},
            {text: "Article 15", correct: false},
            {text: "Article 17", correct: true},
            {text: "Article 19", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the official languages of the Union?",
        answers: [
            {text: "Article 341", correct: false},
            {text: "Article 343", correct: true},
            {text: "Article 345", correct: false},
            {text: "Article 348", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the election of the Vice-President of India?",
        answers: [
            {text: "Article 62", correct: false},
            {text: "Article 63", correct: false},
            {text: "Article 66", correct: true},
            {text: "Article 68", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution grants the power to Parliament to legislate on subjects in the State List?",
        answers: [
            {text: "Article 248", correct: false},
            {text: "Article 249", correct: true},
            {text: "Article 250", correct: false},
            {text: "Article 251", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the abolition of titles, except military and academic distinctions?",
        answers: [
            {text: "Article 18", correct: true},
            {text: "Article 20", correct: false},
            {text: "Article 22", correct: false},
            {text: "Article 24", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the prohibition of traffic in human beings and forced labor?",
        answers: [
            {text: "Article 21", correct: false},
            {text: "Article 23", correct: true},
            {text: "Article 25", correct: false},
            {text: "Article 27", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the adjudication of disputes relating to waters of inter-state rivers or river valleys?",
        answers: [
            {text: "Article 246", correct: false},
            {text: "Article 256", correct: false},
            {text: "Article 262", correct: true},
            {text: "Article 263", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the freedom of conscience and free profession, practice, and propagation of religion?",
        answers: [
            {text: "Article 24", correct: false},
            {text: "Article 25", correct: true},
            {text: "Article 26", correct: false},
            {text: "Article 27", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution allows for the establishment of new All India Services??",
        answers: [
            {text: "Article 312", correct: true},
            {text: "Article 313", correct: false},
            {text: "Article 314", correct: false},
            {text: "Article 315", correct: false},
        ]
    },
];

const advancedQuestions = [
    {
        question: "Which Article of the Indian Constitution allows Parliament to legislate on matters in the State List in the national interest?",
        answers: [
            {text: "Aricle 249", correct: true},
            {text: "Aricle 250", correct: false},
            {text: "Aricle 253", correct: false},
            {text: "Aricle 254", correct: false},
        ]
    },
    {
        question: "Under which Article of the Indian Constitution does the President have the power to declare a Financial Emergency?",
        answers: [
            {text: "Article 352", correct: false},
            {text: "Article 356", correct: false},
            {text: "Article 360", correct: true},
            {text: "Article 365", correct: false},
        ]
    },
    {
        question: "Which Schedule of the Indian Constitution details the powers, authority, and responsibilities of Panchayats?",
        answers: [
            {text: "Seventh Schedule", correct: false},
            {text: "Eighth Schedule", correct: false},
            {text: "Eleventh Schedule", correct: true},
            {text: "Twelfth Schedule", correct: false},
        ]
    },
    {
        question: "Which Constitutional Amendment added the words 'Socialist' and 'Secular' to the Preamble of the Indian Constitution?",
        answers: [
            {text: "24th Amendment", correct: false},
            {text: "42nd Amendment", correct: true},
            {text: "44th Amendment", correct: false},
            {text: "52nd Amendment", correct: false},
        ]
    },
    {
        question: "Which Article provides for the establishment of the Union Public Service Commission (UPSC)?",
        answers: [
            {text: "Article 312", correct: false},
            {text: "Article 315", correct: true},
            {text: "Article 320", correct: false},
            {text: "Article 323", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution restricts the power of Parliament to amend the Constitution to not alter the basic structure?",
        answers: [
            {text: "Article 13", correct: false},
            {text: "Article 32", correct: false},
            {text: "Article 368", correct: true},
            {text: "Article 370", correct: false},
        ]
    },
    {
        question: "Which Part of the Indian Constitution deals with the Official Language?",
        answers: [
            {text: "Part XIV", correct: false},
            {text: "Part XVII", correct: true},
            {text: "Part XIX", correct: false},
            {text: "Part XXI", correct: false},
        ]
    },
    {
        question: "Which Constitutional Amendment Act gave constitutional status to the Panchayati Raj institutions?",
        answers: [
            {text: "72nd Amendment Act", correct: false},
            {text: "73rd Amendment Act", correct: true},
            {text: "74th Amendment Act", correct: false},
            {text: "75th Amendment Act", correct: false},
        ]
    },
    {
        question: "Under which Article of the Indian Constitution can the Supreme Court transfer cases from one High Court to another?",
        answers: [
            {text: "Article 134", correct: false},
            {text: "Article 136B", correct: false},
            {text: "Article 140", correct: false},
            {text: "Article 139A", correct: true},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the protection of interests of minorities?",
        answers: [
            {text: "Article 14", correct: false},
            {text: "Article 19", correct: false},
            {text: "Article 29", correct: true},
            {text: "Article 30", correct: false},
        ]
    },
    {
        question: "Which Article deals with the power of the Supreme Court to review its own judgments or orders?",
        answers: [
            {text: "Article 131", correct: false},
            {text: "Article 137", correct: true},
            {text: "Article 139", correct: false},
            {text: "Article 143", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution prohibits forced labor and child labor?",
        answers: [
            {text: "Article 21", correct: false},
            {text: "Article 23", correct: false},
            {text: "Article 24", correct: true},
            {text: "Article 25", correct: false},
        ]
    },
    {
        question: "Which Part of the Indian Constitution deals with the Directive Principles of State Policy?",
        answers: [
            {text: "Part III", correct: false},
            {text: "Part IV", correct: true},
            {text: "Part V", correct: false},
            {text: "Part VI", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides the power to the President to dissolve the Lok Sabha?",
        answers: [
            {text: "Article 83", correct: false},
            {text: "Article 85", correct: true},
            {text: "Article 75", correct: false},
            {text: "Article 100", correct: false},
        ]
    },
    {
        question: "Which Schedule of the Indian Constitution contains the forms of oaths or affirmations for Constitutional officeholders?",
        answers: [
            {text: "Third Schedule", correct: true},
            {text: "Fourth Schedule", correct: false},
            {text: "Fifth Schedule", correct: false},
            {text: "Sixth Schedule", correct: false},
        ]
    },
    {
        question: "Which Amendment Act of the Indian Constitution lowered the voting age from 21 to 18 years?",
        answers: [
            {text: "61st Amendment Act", correct: true},
            {text: "62nd Amendment Act", correct: false},
            {text: "63rd Amendment Act", correct: false},
            {text: "64th Amendment Act", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the special provisions for Jammu and Kashmir?",
        answers: [
            {text: "Article 350", correct: false},
            {text: "Article 352", correct: false},
            {text: "Article 370", correct: true},
            {text: "Article 371", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the powers of the Election Commission?",
        answers: [
            {text: "Article 320", correct: false},
            {text: "Article 324", correct: true},
            {text: "Article 326", correct: false},
            {text: "Article 329", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the procedure in Parliament with respect to estimates?",
        answers: [
            {text: "Article 109", correct: false},
            {text: "Article 110", correct: false},
            {text: "Article 112", correct: false},
            {text: "Article 113", correct: true},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the establishment of the Supreme Court of India?",
        answers: [
            {text: "Article 124", correct: true},
            {text: "Article 126", correct: false},
            {text: "Article 128", correct: false},
            {text: "Article 131", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution allows the Parliament to create a new state?",
        answers: [
            {text: "Article 1", correct: false},
            {text: "Article 2", correct: false},
            {text: "Article 3", correct: true},
            {text: "Article 4", correct: false},
        ]
    },
    {
        question: "Which Amendment Act introduced the Goods and Services Tax (GST) in India?",
        answers: [
            {text: "99th Amendment Act", correct: false},
            {text: "100th Amendment Act", correct: false},
            {text: "101st Amendment Act", correct: true},
            {text: "102nd Amendment Act", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the establishment of a National Commission for Scheduled Castes?",
        answers: [
            {text: "Article 336", correct: false},
            {text: "Article 338", correct: true},
            {text: "Article 340", correct: false},
            {text: "Article 342", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the separation of the judiciary from the executive?",
        answers: [
            {text: "Article 48", correct: false},
            {text: "Article 49", correct: false},
            {text: "Article 50", correct: true},
            {text: "Article 51", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the formation of a new All India Service?",
        answers: [
            {text: "Article 310", correct: false},
            {text: "Article 249", correct: false},
            {text: "Article 312", correct: true},
            {text: "Article 251", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the establishment of Administrative Tribunals?",
        answers: [
            {text: "Article 323A", correct: true},
            {text: "Article 324B", correct: false},
            {text: "Article 233", correct: false},
            {text: "Article 336", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with the election of the Speaker and Deputy Speaker of the House of the People?",
        answers: [
            {text: "Article 92", correct: false},
            {text: "Article 93", correct: true},
            {text: "Article 94", correct: false},
            {text: "Article 95", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution allows for the imposition of restrictions on the freedom of speech and expression?",
        answers: [
            {text: "Article 15", correct: false},
            {text: "Article 16(1)", correct: false},
            {text: "Article 19(2)", correct: true},
            {text: "Article 33", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the establishment of a Common High Court for two or more states?",
        answers: [
            {text: "Article 215", correct: false},
            {text: "Article 216", correct: false},
            {text: "Article 231", correct: true},
            {text: "Article 232", correct: false},
        ]
    },
    {
        question: "Which Article of the Indian Constitution provides for the establishment of an Inter-State Council?",
        answers: [
            {text: "Article 260", correct: false},
            {text: "Article 262", correct: false},
            {text: "Article 263", correct: true},
            {text: "Article 268", correct: false},
        ]
    },
];


// const Quiz = () => {
//     const [quizLevel, setQuizLevel] = useState(null);
//     const [questions, setQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [answerStatus, setAnswerStatus] = useState(null); 

//     const startQuiz = (level) => {
//         switch(level) {
//           case 'beginner':
//             setQuestions(beginnerQuestions);
//             break;
//           case 'intermediate':
//             setQuestions(intermediateQuestions);
//             break;
//           case 'advanced':
//             setQuestions(advancedQuestions);
//             break;
//           default:
//             break;
//         }
//         setQuizLevel(level);
//         setCurrentQuestionIndex(0);
//         setScore(0);
//         setSelectedAnswer(null);
//         setAnswerStatus(null); 
//     };
  
//     const handleAnswerClick = (answer) => {
//         if (selectedAnswer !== null) return; 

//         const isCorrect = answer.correct;
//         setSelectedAnswer(answer);
//         setAnswerStatus(isCorrect ? 'correct' : 'incorrect'); 

//         if (isCorrect) {
//             setScore(score + 1);
//         }

//         setTimeout(() => {
//             if (currentQuestionIndex < questions.length - 1) {
//                 setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 setSelectedAnswer(null);
//                 setAnswerStatus(null); 
//             } else {
//                 alert(`Quiz finished! You scored ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
//                 setQuizLevel(null); 
//             }
//         }, 1000); 
//     };

//     const goBack = () => {
//         setQuizLevel(null);
//     };
  
//     const currentQuestion = questions[currentQuestionIndex];
  
//     return (
//       <div className="quiz-container">
//         {quizLevel !== null && (
//           <button className="go-back-button" onClick={goBack}>
//             Go Back
//           </button>
//         )}
//         {quizLevel === null ? (
//           <div className="quiz-selection">
//             <h2>Select a Quiz Level</h2>
//             <div className="level-container">
//               <div className="level">
//                 <img src={Beginner} alt='Beginner' />
//                 <button onClick={() => startQuiz('beginner')}>Beginner</button>
//                 </div>
//                 <div className="level">
//               <img src={Intermediate} alt='Intermediate' />
//                 <button onClick={() => startQuiz('intermediate')}>Intermediate</button>
//                 </div>
//                 <div className="level">
//                 <img src={Advance} alt='Advance' />
//                 <button onClick={() => startQuiz('advance')}>Advance</button>
//                 </div>
//             </div>
//           </div>
//         ) : (
//             <div className="quiz">
//             <h2>{currentQuestion.question}</h2>
//             <div className="answers">
//               {currentQuestion.answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   className={`answer-button ${selectedAnswer && selectedAnswer.text === answer.text ? answerStatus : ''}`}
//                   onClick={() => handleAnswerClick(answer)}
//                   disabled={selectedAnswer !== null} 
//                 >
//                   {answer.text}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
// };
  
// export default Quiz;


// const Quiz = () => {
//     const [quizLevel, setQuizLevel] = useState(null);
//     const [questions, setQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [correctAnswer, setCorrectAnswer] = useState(null);
  
//     const startQuiz = (level) => {
//       switch(level) {
//         case 'beginner':
//           setQuestions(beginnerQuestions);
//           break;
//         case 'intermediate':
//           setQuestions(intermediateQuestions);
//           break;
//         case 'advanced':
//           setQuestions(advancedQuestions);
//           break;
//         default:
//           break;
//       }
//       setQuizLevel(level);
//       setCurrentQuestionIndex(0);
//       setScore(0);
//       setSelectedAnswer(null);
//       setCorrectAnswer(null);
//     };
  
//     const handleAnswerClick = (answer) => {
//       if (selectedAnswer !== null) return;
  
//       const isCorrect = answer.correct;
//       setSelectedAnswer(answer.text);
//       setCorrectAnswer(questions[currentQuestionIndex].answers.find(a => a.correct).text);
  
//       if (isCorrect) {
//         setScore(score + 1);
//       }
  
//       setTimeout(() => {
//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//           setSelectedAnswer(null);
//           setCorrectAnswer(null);
//         } else {
//           alert(`Quiz finished! You scored ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
//           setQuizLevel(null);
//         }
//       }, 1000);
//     };
  
//     const goBack = () => {
//       setQuizLevel(null);
//     };
  
//     const currentQuestion = questions[currentQuestionIndex];
  
//     return (
//       <div className="quiz-container">
//         {quizLevel !== null && (
//           <button className="go-back-button" onClick={goBack}>
//             Go Back
//           </button>
//         )}
//         {quizLevel === null ? (
//           <div className="quiz-selection">
//             <h2>Select a Quiz Level</h2>
//             <div className="level-container">
//               <div className="level">
//                 <img src={Beginner} alt='Beginner' />
//                 <button onClick={() => startQuiz('beginner')}>Beginner</button>
//               </div>
//               <div className="level">
//                 <img src={Intermediate} alt='Intermediate' />
//                 <button onClick={() => startQuiz('intermediate')}>Intermediate</button>
//               </div>
//               <div className="level">
//                 <img src={Advance} alt='Advance' />
//                 <button onClick={() => startQuiz('advanced')}>Advanced</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="quiz">
//             <h2>{currentQuestion.question}</h2>
//             <div className="answers">
//               {currentQuestion.answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   className={`answer-button ${selectedAnswer ? (answer.correct ? 'correct' : 'incorrect') : ''} ${
//                     selectedAnswer && selectedAnswer === answer.text ? (answer.correct ? 'correct' : 'incorrect') : ''
//                   }`}
//                   onClick={() => handleAnswerClick(answer)}
//                   disabled={selectedAnswer !== null}
//                 >
//                   {answer.text}
//                 </button>
//               ))}
//             </div>
//             {correctAnswer && (
//               <div className="correct-answer">
//                 Correct Answer: {correctAnswer}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default Quiz;

const Quiz = () => {
    const [quizLevel, setQuizLevel] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
  
    const startQuiz = (level) => {
      switch(level) {
        case 'beginner':
          setQuestions(beginnerQuestions);
          break;
        case 'intermediate':
          setQuestions(intermediateQuestions);
          break;
        case 'advanced':
          setQuestions(advancedQuestions);
          break;
        default:
          break;
      }
      setQuizLevel(level);
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    };
  
    const handleAnswerClick = (answer) => {
      if (selectedAnswer !== null) return;
  
      const isCorrect = answer.correct;
      setSelectedAnswer(answer.text);
      setCorrectAnswer(questions[currentQuestionIndex].answers.find(a => a.correct).text);
  
      if (isCorrect) {
        setScore(score + 1);
      }
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
      } else {
        alert(`Quiz finished! You scored ${score + (selectedAnswer === correctAnswer ? 1 : 0)} out of ${questions.length}`);
        setQuizLevel(null);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
      }
    };
  
    const goBack = () => {
      setQuizLevel(null);
    };
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div className="quiz-container">
        {quizLevel !== null && (
          <button className="go-back-button" onClick={goBack}>
            Go Back
          </button>
        )}
        {quizLevel === null ? (
          <div className="quiz-selection">
            <h2>Select a Quiz Level</h2>
            <div className="level-container">
              <div className="level">
                <img src={Beginner} alt='Beginner' />
                <button onClick={() => startQuiz('beginner')}>Beginner</button>
              </div>
              <div className="level">
                <img src={Intermediate} alt='Intermediate' />
                <button onClick={() => startQuiz('intermediate')}>Intermediate</button>
              </div>
              <div className="level">
                <img src={Advance} alt='Advance' />
                <button onClick={() => startQuiz('advanced')}>Advanced</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="quiz">
            <h2>{currentQuestion.question}</h2>
            <div className="answers">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className={`answer-button ${selectedAnswer ? (answer.correct ? 'correct' : 'incorrect') : ''} ${
                    selectedAnswer && selectedAnswer === answer.text ? (answer.correct ? 'correct' : 'incorrect') : ''
                  }`}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={selectedAnswer !== null}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            {correctAnswer && (
              <div className="correct-answer">
                Correct Answer: {correctAnswer}
              </div>
            )}
            <div className="navigation-buttons">
              <button
                className="nav-button"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Go Back
              </button>
              <button
                className="nav-button"
                onClick={handleNext}
                disabled={selectedAnswer === null}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz;