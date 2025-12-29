import VoiceAgent from "@/components/VoiceAgent";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/suresh-babu-strategic-advisor.png"
            alt="Dr Suresh Babu"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcoming Our New Strategic Advisor
          </h1>
          <p className="text-gray-600 mb-4 text-justify md:text-left">
            <span className="text-primary">We're delighted to welcome</span> Dr Suresh Babu as Startegic Advisor
            – Generative AI for Global Agriculture at Farm Vaidya. His insights
            into smallholder farmers and agri-input stakeholders have been
            pivotal in shaping our Agriculture Domain Speech-to-Text (STT)
            innovation, keeping our solutions grounded, impactful, and
            scalable.
          </p>
          <p className="text-gray-600 mb-4 text-justify md:text-left">
            His partnership strengthens our mission to build Generative AI
            voice solutions that are accessible, inclusive, and actionable,
            empowering farmers and driving global agricultural transformation.
          </p>
          <p className="text-gray-600 mb-4 text-justify md:text-left">
            We’re grateful to have Dr Suresh Babu as our advisor. His trust in
            our vision inspires us to move forward with purpose.
          </p>
          <div className="text-right text-gray-700">
            <p className="font-semibold">— Dr Ramadugu Praveen & Gollu Jyotsna</p>
            <p className="mt-4 text-sm">
              <span className="font-bold">Dr Suresh Babu</span>
              <br />
              International Food Policy Research Institute (IFPRI), CGIAR,
              <br />
              Washington, DC, USA
            </p>
          </div>
        </div>
      </div>
      <VoiceAgent />
    </div>
  );
}