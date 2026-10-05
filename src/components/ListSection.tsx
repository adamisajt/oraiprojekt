import type { ListGroup } from '../types/pageTypes';

type ListSectionProps = {
  groups: ListGroup[];
};

function ListSection({ groups }: ListSectionProps) {
  return (
    <section className="row mb-2">
      {groups.map((group, index) => {
        const listClass = group.numbered
          ? 'list-group list-group-numbered'
          : 'list-group';

        const items = group.items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ));

        return (
          <div
            className={`col-sm-4 kartya${index > 0 ? ' mb-2' : ''}`}
            key={group.id}
          >
            <h2>{group.title}</h2>

            {group.numbered ? (
              <ol className={listClass}>{items}</ol>
            ) : (
              <ul className={listClass}>{items}</ul>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ListSection;