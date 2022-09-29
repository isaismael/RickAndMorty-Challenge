// Generated by https://quicktype.io

export interface PersonajesPaginatedResponse {
    info:    Info;
    results: Result[];
}

export interface SimplePersonaje {
    id: string;
    name: string;
    url: string;
    color?: string
    // image: string;
    picture: string;
    status:   string;
    location: Location;
}


export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}


// Generated by https://quicktype.io

export interface PersonajeFull {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
    
}

export interface Location {
    name: string;
    url:  string;
}
