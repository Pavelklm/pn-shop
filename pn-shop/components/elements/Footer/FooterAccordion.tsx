/* eslint-disable indent */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Footer__link_account from './FooterLinkAccount'
import Footer__link_help from './FooterLinkHelp'
import Footer__link_klm from './FooterLinkKlm'
import {
  Footer__link__title_account,
  Footer__link__title_help,
  Footer__link__title_klm,
} from './FooterLinksTitles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  heading: {
    flexBasis: '70%',
  },
}))

export default function FooterAccordion() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) =>
    (_event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography component='div' className={classes.heading}>
            <Footer__link__title_account />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <div className='footer__links'>
              <Footer__link_account />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography component='div' className={classes.heading}>
            <Footer__link__title_help />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <Footer__link_help />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography component='div' className={classes.heading}>
            <Footer__link__title_klm />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <Footer__link_klm />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
