interface JsonLdServerComponentProps {
  jsonLdData: any; // or specify a more specific type
}

const JsonLdServerComponent = ({ jsonLdData }: JsonLdServerComponentProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLdServerComponent;