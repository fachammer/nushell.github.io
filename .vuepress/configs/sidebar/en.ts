import type { SidebarConfig } from '@vuepress/theme-default';

export const sidebarEn: SidebarConfig = {
  '/book/': [
    {
      text: 'Introduction',
      link: '/book/README.md',
      collapsible: false,
    },
    {
      text: 'Getting Started',
      link: '/book/getting_started.md',
      collapsible: false,
      children: [
        '/book/installation.md',
        '/book/quick_tour.md',
        '/book/moving_around.md',
        '/book/thinking_in_nu.md',
      ],
    },
    {
      text: 'Nu Fundamentals',
      link: '/book/nu_fundamentals.md',
      collapsible: false,
      children: [
        '/book/types_of_data.md',
        '/book/loading_data.md',
        '/book/pipelines.md',
        '/book/working_with_strings.md',
        '/book/working_with_lists.md',
        '/book/working_with_tables.md',
        '/book/command_reference.md',
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/book/programming_in_nu.md',
      collapsible: false,
      children: [
        '/book/custom_commands.md',
        '/book/aliases.md',
        '/book/operators.md',
        '/book/variables_and_subexpressions.md',
        '/book/scripts.md',
        '/book/modules.md',
        '/book/overlays.md',
        '/book/command_signature.md',
      ],
    },
    {
      text: 'Nu as a Shell',
      link: '/book/nu_as_a_shell.md',
      collapsible: false,
      children: [
        '/book/configuration.md',
        '/book/environment.md',
        '/book/stdout_stderr_exit_codes.md',
        '/book/escaping.md',
        '/book/3rdpartyprompts.md',
        '/book/shells_in_shells.md',
        '/book/line_editor.md',
        '/book/externs.md',
        '/book/custom_completions.md',
        '/book/coloring_and_theming.md',
        '/book/hooks.md',
        '/book/background_task.md',
      ],
    },
    {
      text: 'Coming to Nu',
      link: '/book/coming_to_nu.md',
      collapsible: false,
      children: [
        '/book/coming_from_bash.md',
        '/book/coming_from_cmd.md',
        '/book/nushell_map.md',
        '/book/nushell_map_imperative.md',
        '/book/nushell_map_functional.md',
        '/book/nushell_operator_map.md',
      ],
    },
    {
      text: 'Design Notes',
      link: '/book/design_notes.md',
      collapsible: false,
      children: ['/book/how_nushell_code_gets_run.md'],
    },
    {
      text: '(Not So) Advanced',
      link: '/book/advanced.md',
      collapsible: false,
      children: [
        '/book/dataframes.md',
        '/book/metadata.md',
        '/book/creating_errors.md',
        '/book/parallelism.md',
        '/book/plugins.md',
        '/book/explore.md',
      ],
    },
  ],
  // "/contributor-book/": [
  //   {
  //     text: "Contributor Book",
  //     collapsible: false,
  //     children: [
  //       "",
  //       "philosophy",
  //       "values",
  //       "commands",
  //       "streams",
  //       "metadata",
  //       "plugins",
  //       "shells",
  //     ],
  //   },
  // ],
  '/cookbook/': [
    {
      text: 'Cookbook',
      collapsible: false,
      children: [
        'README.md',
        'setup',
        'help',
        'system',
        'parsing',
        'native_shell_programs',
        'files',
        'git',
        'parsing_git_log',
        'http',
        'direnv',
        'misc',
        'tables',
        'polars_v_pandas_v_nushell',
      ],
    },
  ],
};
