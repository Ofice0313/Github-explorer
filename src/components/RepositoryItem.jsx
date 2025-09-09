export function RepositoryItem(props) {
    const { repository } = props;
    return(
        <li><strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.link}>Acessar Repositório</a>
        </li>
    );
}     