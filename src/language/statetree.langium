grammar Statetree

entry Statemachine:
    ('initialState' init=[State:UCID])?
    states+=State*;

State:
    name=UCID 
    ('{'
    transitions+=Transition*
    ('initialState' init=[State:UCID])?
    states+=State*
    '}')?
    (inlineTransition=NextStateTransition)?
;
NextStateTransition: (
   (event=LCID ('=>')?)?|'=>'
);
Transition:
    event=LCID
    '=>' 
    to=[State:UCID]
;

// QualifiedName returns string:
//     AnyId ('.' AnyId)*;

AnyId returns string: UCID | LCID;

IdOrString returns string: AnyId|STRING;

hidden terminal WS: /\s+/;
terminal UCID: /[A-Z][\w_]*/;
terminal LCID: /[_a-z][\w_]*/;
// terminal ID: /[_a-zA-Z][\w_]*/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;
hidden terminal HASH_COMMENT: /\#[^\n\r]*/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
