function SectionTitle({
  title,
  subtitle,
}) {

  return (

    <div className="mb-14">

      <h2 className="text-4xl font-bold">

        {title}

      </h2>

      {subtitle && (

        <p className="mt-4 max-w-2xl text-slate-400">

          {subtitle}

        </p>

      )}

    </div>

  );

}

export default SectionTitle;