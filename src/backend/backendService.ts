import React from "react";

interface IKid {
    id: number,
    name: string,
    parents: [string, string]
    isPressent: boolean,
}

type User = {
    id: String,
    name: String,
    lastName: String,
    age: Number,
}

const addKid = (id: number, name: string, parents:[mom: string, dad: string ], isPressent: boolean):IKid => {
    return {id, name, parents, isPressent};
}

export const kids = [
    addKid(1, "Oskar Skak", ["Tea", "Kim"], true),
    addKid(2, "Ulrik Sandberg", ["Birgit", "Hans"], false),
    addKid(3, "Casper Hansen", ["Lone", "Jørgen"], true),
    addKid(4, "Morten Skovgaard", ["Merete", "Karl"],true),
    addKid(5, "William Nielsen", ["Lotte", "Ib"], false),
]

const loggedInUsers = []

export const LoginWithNFC = () => {

    // Generate a random nfc login bla bla bla

}
