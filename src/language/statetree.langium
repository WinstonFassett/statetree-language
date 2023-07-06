grammar Statetree

entry Statemachine:
    'statemachine' name=ID
    'initialState' init=[State]
    states+=State*;

Event:
    name=ID;

State:
    'state' name=QualifiedName
        ('initialState' init=[State])?
        transitions+=Transition*
        states+=State*
    'end';

Transition:
    event=ID '=>' state=[State:QualifiedName];

QualifiedName returns string:
    ID ('.' ID)*;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;