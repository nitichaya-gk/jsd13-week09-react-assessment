import Nav from "../components/navbar";
import ownerImage from "../image/image-ja-assessment.png";

export default function Owner() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center pt-14 px-6">
        <h1 className="text-3xl font-extrabold mb-8">
          22 Nitichaya Glangkarn (Focus) - JSDX
        </h1>

        <img
          src={ownerImage}
          alt="Nitichaya Glangkarn"
          className="w-72 h-56 object-cover border border-gray-500"
        />

        <div className="mt-8 max-w-xl text-center">
          <p className="font-bold mb-2">Short Biography:</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Building AI and data-driven solutions that solve real-world problems 
            and create meaningful social impact. Passionate about GovTech, 
            HealthTech, and turning data into better decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
