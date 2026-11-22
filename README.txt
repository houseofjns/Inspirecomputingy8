HOUSE OF J&S COMPUTER TRAINING CENTER
INSPIRE COMPUTING INTERNATIONAL · YEAR 8
BILINGUAL LEARNING PORTAL + UNIT EXAMINATION SYSTEM

============================================================
1. OPEN THE PORTAL
============================================================

Extract the ZIP and open index.html in a modern browser. The core
learning pages, quizzes and examination engine use local HTML, CSS and
vanilla JavaScript. For service-worker caching, serve through HTTPS or
localhost; opening index.html directly still supports local use but
will not install a service worker.

For GitHub Pages, upload the extracted project contents to a repository
and enable GitHub Pages for the required branch/folder.

============================================================
2. BRAND AND APPROVED TEMPLATE
============================================================

This Year 8 portal reuses the approved House of J&S Master Template design.
The existing centred single-panel login screen, dark navy background,
original logo placement, gold accents, dashboard, sidebar, typography,
module navigation, quiz and exam interfaces are retained.

The supplied Year 8 logo is installed at assets/logo1.png and appears
on the login screen and sidebar.

============================================================
3. YEAR 8 SOURCE COVERAGE
============================================================

Primary references used to build this portal:
- Inspire Computing International Year 8 Student Book, Pearson.
- Inspire Computing Workbook Year 8, Pearson.
- Inspire Computing Workbook Year 8 Answer Sheet.

IMPORTANT UPLOAD-SIZE NOTE
No original Student Book PDF, Workbook PDF or Answer Sheet PDF is included
in this ZIP. No scanned PDF page images are included either. Only the
lesson-by-lesson answer text needed by the portal is retained in JavaScript.

The Student Book's six-unit sequence is preserved:

Unit 1  Binary and online graphics
  Vector graphics; creating a vector graphic; bitmaps; comparing
  vectors and bitmaps; binary and pixels; colour depth and binary
  representation; digital image properties; binary addition.

Unit 2  Data on the Web
  Bits, bytes and nibbles; storage capacity; binary and denary;
  creating a 'power of' calculator; internet bandwidth; creating a
  bandwidth calculator; compression; Run Length Encoding.

Unit 3  Processing Data
  Computer hardware; wearable technology; logo design; introduction
  to spreadsheets; spreadsheet formulas and functions; spreadsheet
  modelling; environmental impact of technology; presenting data in
  an informative way; surveys and questionnaires; advanced spreadsheet
  functions.

Unit 4  Analysing Data
  Social media; what makes a good spreadsheet; knowledge, data and
  information; sorting and filtering a spreadsheet; design techniques
  for an online advertisement; what makes a good chart; designing an
  infographic.

Unit 5  Programming
  Algorithms and turtle programming; sequencing and iteration
  algorithms; programming errors; using lists in a Python program;
  use of selection in an algorithm; creating a simple chatbot;
  subprograms in an algorithm; creating a missing word game.

Unit 6  Software and communication
  Surveillance technology; types of software; operating systems;
  utility software; internet hardware; wireless communication
  technology; the internet and the World Wide Web; surveillance ethics;
  data breaches and cyber-crime.

Each unit provides all 15 portal sections: overview, objectives,
detailed notes, topic explanations, definitions, examples, tables and
diagrams, step-by-step instructions, practical activities, workbook
answer support, exam points, glossary, PowerPoint outline, quiz and
one-hour exam. Myanmar explanations are companion teaching notes
prepared for this portal; they are not publisher-issued translations.

VISUAL STUDY NOTES EXPANSION
The Detailed Study Notes now include 66 lesson-linked visual blocks
across the six units: coordinate graphs and vector shapes, bitmap pixel
grids, comparison and calculation tables, process flow diagrams,
spreadsheet examples, chart examples, network and operating-system
layer diagrams, and Python code with expected output. These are original
teaching visuals created to explain the topics in the supplied books.
Illustrative practice datasets are explicitly labelled and are not
presented as publisher-supplied data. The Python examples are shown as
code for learning; run them in an appropriate Python environment.

WORKBOOK ANSWERS
The answer sheet's lesson labels, question numbering and extracted answer
wording are retained in js/workbook-answers.js for lesson-by-lesson lookup.
The Worksheet Answer Guide uses formatted lesson cards, question-number cards,
quick-quiz answer chips, formatted working/code panels and selected structured
data tables. These are presentation improvements; the answer wording remains
based on the supplied answer sheet.
The original answer PDF, Workbook PDF, Student Book PDF and all scanned page
images are intentionally excluded from this ZIP. Use a separate copy of the
Workbook PDF to view original exercise prompts, grids and diagrams.

SOURCE LIMITATION
The Student Book and Workbook are scanned PDFs. This portal follows
their contents pages and visible lesson topics; the Answer Sheet is
text-extractable. The build does not claim every workbook question has
been transcribed verbatim. Some visual activities, coordinate grids,
spreadsheets or drawing tasks must still be viewed in the original
Workbook PDF. If a model exercise is added to explain a concept, it is
teaching material and not a publisher answer unless identified in the
answer key.

============================================================
4. UNIT EXAMINATION
============================================================

Each unit generates a separate 84-question, 100-mark paper:
A. 30 multiple-choice questions                 30 marks
B. 20 fill-in-the-blank questions               20 marks
C. 20 matching questions                        20 marks
D. 10 short-answer questions                    10 marks
E.  4 long-answer questions                     20 marks
Duration: 60 minutes. Pass threshold: 50/100.

Portal login password: HJS2026
Exam password: HJS2026
Students enter their name at portal login. The exam asks for the same
name (prefilled) and the exam password before the paper starts.

The question bank is generated independently for each unit from that
unit's terminology and model essays. Objective sections are marked
automatically. Short/essay keyword scoring is provisional; teacher
review is recommended for equivalent wording and extended responses.

============================================================
5. SECURITY LIMITATIONS
============================================================

This is an offline browser-based practice portal, not a tamper-proof
proctoring system. The password is present in client-side JavaScript;
a technically capable user can inspect or change it. Student results
are stored in local browser storage and are not centrally protected.

Fullscreen is requested when the exam starts. Browsers require a user
gesture to re-enter fullscreen after exit. Before-unload and history
warnings discourage accidental navigation but cannot prevent all
bypass methods. Do not use this client-only site as the sole control
for high-stakes examinations.

============================================================
6. LOCAL DATA AND FILE MAP
============================================================

Progress and exam history are saved locally in the browser under
hjsProgress and hjsExamResults. Clearing browser data removes them.

index.html                      Portal shell and student login
css/style.css                   Approved responsive gold/navy styling
js/app.js                       Navigation, dashboard and module rendering
js/portal-auth.js               Student login/session/logout
js/modules.js                   Six Year 8 bilingual unit modules
js/workbook-answers.js          Extracted Year 8 answer sheet sections
js/answer-renderer.js           Formatted worksheet answer cards and tables
js/quizzes.js                   Unit knowledge-check quiz engine
js/examinations.js              84-question exam/timer/result engine
assets/logo1.png                User-supplied House of J&S logo
assets/images/                  Unit learning diagrams
manifest.webmanifest            Install metadata
sw.js                           Offline cache for HTTPS/localhost

Source PDFs and scanned PDF page images are not included in this package.

END OF README
