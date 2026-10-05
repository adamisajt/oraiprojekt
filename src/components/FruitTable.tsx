type FruitTableProps = {
  rows: string[][];
};

function FruitTable({ rows }: FruitTableProps) {
  return (
    <section className="row mb-1" id="mibolLehetMegPalinka">
      <div className="col-sm-12 kartya mb-3">
        <h2>Miből készülhet gyümölcspárlat?</h2>

        <table className="table table-bordered">
          <tbody>
            {rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((fruit) => (
                  <td key={fruit}>{fruit}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FruitTable;