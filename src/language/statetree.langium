grammar Statetree

entry Statemachine:
    ('statemachine' name=ID)?
    // state parts:
    ('initialState' init=[State])?
    transitions+=Transition*
    (StateSet | Sequence)? 
;

// StateBlock: StateSet | Sequence;

fragment StateSet:
    'states' 
        states+=State*
    'end';

fragment Sequence:
    (sequence?='sequence')
    ('('event=ID')')?
        states+=State*     
    ('end'|(loop?='loop')?);

State:
    ('state')?
    name=ID
    ('{' 
        /* Stateparts */
        ('initialState' init=[State])?
        transitions+=Transition*
        (StateSet | Sequence)? 
    '}')?
    ;

Transition: 
// midfix
(event=ID ('=>' | 'to' | ':' | 'go') to=[State])
|
// prefix
('on' event=ID ('=>'|'go'|':')? to=[State]);

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
hidden terminal HASH_COMMENT: /\#[^\n\r]*/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
