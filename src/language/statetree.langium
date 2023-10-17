grammar Statetree

entry Statemachine:
    ('statemachine' name=ID)?    
    Stateful 
;

fragment Stateful:
    ('initialState' init=[State])?
    transitions+=Transition*
    (('states')? | (sequence?='sequence')|(loop?='loop'))
    ('on' event=ID)?
    ('{'
        states+=State*     
    '}')?;

State:
    ('state')?
    name=ID
    ('{'        
        Stateful
    '}')?
    ;

Transition: 
    (event=ID ('=>' | 'to' | ':' | 'go') to=[State])
;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
hidden terminal HASH_COMMENT: /\#[^\n\r]*/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;

// Note that Langiums behavior can be overriden by overriding the TokenBuilder service in Langium.
// override https://github.com/eclipse-langium/langium/blob/main/packages/langium/src/parser/token-builder.ts
// https://github.com/eclipse-langium/langium/discussions/782