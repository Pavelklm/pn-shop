/* eslint-disable indent */
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import Footer__link_account from './Footer__link_account'
import Footer__link_help from './Footer__link_help'
import Footer__link_klm from './Footer__link_klm'
import {
  Footer__link__title_account,
  Footer__link__title_help,
  Footer__link__title_klm,
} from './Footer__links__titles'

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
