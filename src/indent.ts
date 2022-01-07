import _ from 'lodash';

export const indentStartTokens = [
  '@alert',
  '@auth',
  '@canany',
  '@cannot',
  '@can',
  '@role',
  '@hasrole',
  '@hasanyrole',
  '@hasallroles',
  '@unlessrole',
  '@hasexactroles',
  '@component',
  '@empty',
  '@env',
  '@foreach',
  '@for',
  '@forelse',
  '@guest',
  '@hassection',
  '@if',
  '@isset',
  '@permission',
  '@permissions',
  '@php',
  '@push',
  '@section',
  '@slot',
  '@switch',
  '@unless',
  '@verbatim',
  '@while',
  '@production',
  '@prepend',
  '@once',
  '@error',
];

export const indentEndTokens = [
  '@endalert',
  '@endauth',
  '@endcanany',
  '@endcannot',
  '@endcan',
  '@endrole',
  '@endhasrole',
  '@endhasanyrole',
  '@endhasallroles',
  '@endunlessrole',
  '@endhasexactroles',
  '@endcomponent',
  '@endempty',
  '@endenv',
  '@endfor',
  '@endforeach',
  '@endforelse',
  '@endguest',
  '@endif',
  '@endisset',
  '@endphp',
  '@endpush',
  '@endsection',
  '@endslot',
  '@endswitch',
  '@endunless',
  '@endverbatim',
  '@endwhile',
  '@show',
  '@stop',
  '@endproduction',
  '@endprepend',
  '@endonce',
  '@enderror',
  '@append',
  '@overwrite',
];

export const indentElseTokens = ['@elseenv', '@elseif', '@elsecanany', '@elsecannot', '@elsecan', '@else'];

// Directives which do not need an end token if a parameter is present
export const optionalStartWithoutEndTokens = {
  '@section': 2,
  '@push': 2,
  '@prepend': 2,
};

export const tokenForIndentStartOrElseTokens = ['@forelse'];

export const indentStartOrElseTokens = ['@empty'];

export const indentStartAndEndTokens = ['@default'];

export const phpKeywordStartTokens = ['@forelse', '@if', '@for', '@foreach', '@while', '@sectionmissing', '@case'];

export const phpKeywordEndTokens = ['@endforelse', '@endif', '@endfor', '@endforeach', '@endwhile', '@break'];

export const inlineFunctionTokens = ['@json'];

export const conditionalTokens = ['@if', '@while', '@case', '@isset', '@empty', '@elseif'];

export function hasStartAndEndToken(tokenizeLineResult: any, originalLine: any) {
  return (
    _.filter(tokenizeLineResult.tokens, (tokenStruct: any) => {
      const token = originalLine.substring(tokenStruct.startIndex, tokenStruct.endIndex).trim();

      return _.includes(indentStartTokens, token) || _.includes(indentEndTokens, token);
    }).length >= 2
  );
}
