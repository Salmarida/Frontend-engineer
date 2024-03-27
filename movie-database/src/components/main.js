/**
 * Membuat component Main
 * Component Main menampung konten utama
 */
import Hello from "./hello";
function Main() {
    return (
        <main>
            <Hello name="Febi" jurusan="English" />
            <Hello name="Salma" jurusan="Informatics"/>
            <Hello name="Annisa" jurusan="Psycologhy" />            
        </main>
    );
}

export default Main;