export default interface Movie {
        id?: number;
        name: string;
        synopsis: string;
        release_date: string;
        box_office: number;
        poster?: string;
        created_at: Date;
        update_at?: Date;
        gender: string;
        full_path?: string;
}
