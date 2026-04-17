import {
  FaUserTie,
  FaRoad,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export const caData = {

  // ================= ABOUT CA =================
  "About CA": {
    icon: <FaUserTie size={30} />,
    content: (
      <div className="space-y-5 text-gray-300 text-sm">

        <p>
          A Chartered Accountant (CA) is a professional certified by ICAI who handles:
        </p>

        <ul className="list-disc ml-5">
          <li>Accounting & Financial Reporting</li>
          <li>Taxation (Income Tax + GST)</li>
          <li>Auditing</li>
          <li>Financial Advisory</li>
          <li>Business Strategy</li>
        </ul>

        <p className="text-yellow-400 font-semibold">
          Basically: A CA is the “financial doctor” of a company.
        </p>

        <img src="/img1.jpg" className="rounded-lg" />

        <h3 className="text-yellow-400 font-bold">What does a CA actually do?</h3>

        <p>Daily work depends on role:</p>

        <h4 className="font-semibold">Core Work Areas</h4>

        <ul className="list-disc ml-5">
          <li>Filing income tax returns</li>
          <li>GST compliance</li>
          <li>Auditing company accounts</li>
          <li>Financial planning & analysis</li>
          <li>Handling mergers, investments</li>
          <li>Risk & fraud detection</li>
        </ul>

        <h4 className="font-semibold">Real-world example:</h4>

        <ul className="list-disc ml-5">
          <li>A startup asks: “How to save tax?” → CA answers</li>
          <li>Company wants funding → CA prepares financials</li>
          <li>Govt audit → CA handles compliance</li>
        </ul>

      </div>
    ),
  },

  // ================= ROADMAP =================
  Roadmap: {
    icon: <FaRoad size={30} />,
    content: (
      <div className="space-y-5 text-gray-300 text-sm">

        <h3 className="text-yellow-400 font-bold">Class 9–10 (Optional Prep Stage)</h3>
        <p>You don’t officially start CA yet, but this phase matters more than people think.</p>

        <ul className="list-disc ml-5">
          <li>Build basic maths + logic</li>
          <li>Profit & Loss</li>
          <li>Percentages</li>
          <li>Basic business concepts</li>
        </ul>

        <p className="text-yellow-400">Smart Move: Learn accounting basics</p>

        <h3 className="text-yellow-400 font-bold">Class 11–12 (Important Phase)</h3>

        <ul className="list-disc ml-5">
          <li>Commerce with Maths (BEST option)</li>
          <li>Accountancy, Business Studies, Economics</li>
          <li>Strong basics = huge advantage</li>
        </ul>

        <img src="/img2.jpg" />

        <h3 className="text-yellow-400 font-bold">PHASE 1: CA Foundation</h3>

        <ul className="list-disc ml-5">
          <li>After Class 12 (any stream)</li>
          <li>Subjects: Accounting, Law, Maths, Economics</li>
          <li>4–6 months preparation</li>
          <li>Goal: Clear first attempt</li>
        </ul>

        <h3 className="text-yellow-400 font-bold">PHASE 2: CA Intermediate</h3>

        <ul className="list-disc ml-5">
          <li>After Foundation OR Direct Entry</li>
          <li>Subjects: Accounting, Corporate Law, Costing, Tax</li>
          <li>8–10 months preparation</li>
        </ul>

        <h3 className="text-yellow-400 font-bold">PHASE 3: Articleship</h3>

        <ul className="list-disc ml-5">
          <li>2 years training</li>
          <li>Audit, tax filing, real work</li>
          <li>₹3k–₹15k stipend</li>
        </ul>

        <h3 className="text-yellow-400 font-bold">PHASE 4: CA Final</h3>

        <ul className="list-disc ml-5">
          <li>Hardest level</li>
          <li>Multiple revisions required</li>
        </ul>

        <p className="text-yellow-400 font-semibold">Total Timeline: 5–6 Years</p>

      </div>
    ),
  },

  // ================= ELIGIBILITY =================
  
Eligibility: {
  icon: <FaCheckCircle size={30} />,
  content: (
    <div className="space-y-5 text-gray-300 text-sm">

      <p>
        To become a CA, you must register with ICAI (Institute of Chartered Accountants of India).
      </p>

      <h3 className="text-yellow-400 font-bold">ROUTE 1: After Class 12 (Foundation Route)</h3>

      <h4 className="font-semibold">Basic Eligibility</h4>
      <ul className="list-disc ml-5">
        <li>Must have passed Class 12 (any stream)</li>
        <li>Science / Commerce / Arts — all allowed</li>
      </ul>

      <h4 className="font-semibold">Minimum Marks Required</h4>
      <ul className="list-disc ml-5">
        <li>No minimum percentage required</li>
        <li>Even 40–50% students can apply</li>
        <li>No cutoff like IIT / NEET</li>
      </ul>

      <h4 className="font-semibold">What you must do:</h4>
      <ul className="list-disc ml-5">
        <li>Register for CA Foundation</li>
        <li>Study for 4–6 months</li>
        <li>Appear in exam</li>
      </ul>

      <h4 className="font-semibold">Important Conditions</h4>
      <ul className="list-disc ml-5">
        <li>Register at least 4 months before exam</li>
        <li>Exams held twice a year (May & November)</li>
      </ul>

      <p className="text-yellow-400">
        Reality: Commerce students have advantage but all streams can do CA.
      </p>

      <img src="/img3.jpg" className="rounded-lg" />

      <h3 className="text-yellow-400 font-bold">ROUTE 2: Direct Entry Route</h3>

      <h4 className="font-semibold">Who can apply?</h4>
      <ul className="list-disc ml-5">
        <li>Graduates / Postgraduates</li>
      </ul>

      <h4 className="font-semibold">Required Marks</h4>
      <ul className="list-disc ml-5">
        <li>Commerce → 55%</li>
        <li>Non-commerce → 60%</li>
      </ul>

      <h4 className="font-semibold">Professional Course Students</h4>
      <ul className="list-disc ml-5">
        <li>CS Intermediate</li>
        <li>CMA Intermediate</li>
        <li>Can directly enter CA Intermediate</li>
      </ul>

      <h4 className="font-semibold">What happens next?</h4>
      <ul className="list-disc ml-5">
        <li>Register for CA Intermediate</li>
        <li>Start Articleship after clearing 1 group</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">Who is NOT Eligible?</h3>
      <ul className="list-disc ml-5">
        <li>Not passed Class 12</li>
        <li>Not meeting graduation % (direct entry)</li>
        <li>Not registered with ICAI</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">Age Limit</h3>
      <ul className="list-disc ml-5">
        <li>No age limit</li>
        <li>You can start at 17 or even 40+</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">Documents Required</h3>
      <ul className="list-disc ml-5">
        <li>Class 10 marksheet (DOB proof)</li>
        <li>Class 12 marksheet</li>
        <li>Graduation marksheet (if direct entry)</li>
        <li>Photo + signature</li>
      </ul>

    </div>
  )
},
  // ================= CHALLENGES =================
  Challenges: {
    icon: <FaExclamationTriangle size={30} />,
  content: (
    <div className="space-y-5 text-gray-300 text-sm">

      <h3 className="text-yellow-400 font-bold">1. Extremely Tough Exams</h3>
      <ul className="list-disc ml-5">
        <li>Huge syllabus</li>
        <li>Concept-heavy subjects</li>
        <li>Very low pass rates (5–20%)</li>
        <li>You can study hard and STILL fail</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">2. Mental Pressure & Stress</h3>
      <ul className="list-disc ml-5">
        <li>Continuous pressure for years</li>
        <li>Fear of failure</li>
        <li>Comparison with others</li>
        <li>Anxiety, burnout, self-doubt</li>
      </ul>

      <img src="/img4.jpg" className="rounded-lg" />

      <h3 className="text-yellow-400 font-bold">3. Multiple Failures</h3>
      <ul className="list-disc ml-5">
        <li>Most students fail first attempt</li>
        <li>2–5 attempts common</li>
        <li>Restarting preparation is hard</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">4. Long Time Commitment</h3>
      <ul className="list-disc ml-5">
        <li>Minimum 4.5–5 years</li>
        <li>Realistically 5–6+ years</li>
        <li>Friends start earning earlier</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">5. Low Stipend</h3>
      <ul className="list-disc ml-5">
        <li>₹3k–₹15k/month</li>
        <li>Long hours + low pay</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">6. Work-Life Imbalance</h3>
      <ul className="list-disc ml-5">
        <li>Miss outings & events</li>
        <li>Constant studying</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">7. Huge Syllabus</h3>
      <ul className="list-disc ml-5">
        <li>Multiple revisions required</li>
        <li>Manage 6–8 subjects together</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">8. Articleship Issues</h3>
      <ul className="list-disc ml-5">
        <li>Not all firms are good</li>
        <li>Sometimes no real learning</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">9. Conceptual Difficulty</h3>
      <ul className="list-disc ml-5">
        <li>Not rote learning</li>
        <li>Requires deep understanding</li>
      </ul>

      <h3 className="text-yellow-400 font-bold">10. Competition</h3>
      <ul className="list-disc ml-5">
        <li>Lakhs of students appear</li>
        <li>High expectations & pressure</li>
      </ul>

      <p className="text-red-400 font-semibold">
        FINAL TRUTH: CA is hard because it demands consistency, not because syllabus is big.
      </p>

    </div>
    ),
  },

};